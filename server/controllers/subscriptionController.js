import { sql } from "./dbController.js"; //import database configs from dbController

const getAllSubscriptions = (req, res, next) => {
  sql`SELECT * FROM subscriptions`
    .then((subscriptions) => {
      console.log("subscriptions", subscriptions);
      res.json(subscriptions);
    })
    .catch(next);
};

const getSubscriptionById = (req, res, next) => {
  let id = req.params.id;
  sql`SELECT * FROM subscriptions WHERE id=${id}`
    .then((subscription) => {
      if (subscription.length === 0) {
        res.set("Content-Type", "text/plain");
        res.status(404);
        res.send("Not Found");
      }
      res.json(subscription[0]);
    })
    .catch(next);
};

const getSubscriptionsByCampaignId = async (req, res, next) => {
  const campaign_id = req.params.id;

  // check if the creator exists
  const campaignCheck = async (campaign_id) => {
    const result =
      await sql`SELECT COUNT(*) FROM campaigns WHERE id = ${campaign_id}`;
    return parseInt(result[0].count);
  };

  try {
    const campaignExists = await campaignCheck(campaign_id);
    if (campaignExists === 0) {
      return res.status(404).json({ message: "campaign not found" });
    }

    // get all subscriptions made by the campaign_id
    const subscriptions = await sql`
    SELECT * FROM subscriptions
    JOIN campaigns ON subscriptions.campaign_id = campaigns.id
    WHERE subscriptions.campaign_id = ${campaign_id}
`;
    res.json(subscriptions);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const postSubscriptionLevel = async (req, res, next) => {
  const { level, campaign_id, amount, rewards } = req.body;

  // check if the campaign exists
  const campaignCheck = async (campaign_id) => {
    const result =
      await sql`SELECT COUNT(*) FROM campaigns WHERE id = ${campaign_id}`;
    return parseInt(result[0].count);
  };

  // check if the level already exists for the campaign
  const levelCheck = async (campaign_id, level) => {
    const result = await sql`
        SELECT COUNT(*) FROM subscriptions
        WHERE campaign_id = ${campaign_id} AND level = ${level}
      `;
    return parseInt(result[0].count);
  };

  try {
    const campaignExists = await campaignCheck(campaign_id);
    if (campaignExists === 0) {
      return res.status(404).json({ message: "campaign not found" });
    }

    const levelExists = await levelCheck(campaign_id, level);
    if (levelExists > 0) {
      return res
        .status(400)
        .json({ message: `level ${level} already exists for campaign` });
    }

    // insert the new subscription level into the subscriptions table
    await sql`
        INSERT INTO subscriptions (level, campaign_id, amount, rewards)
        VALUES (${level}, ${campaign_id}, ${amount}, ${rewards}) RETURNING *
      `;

    res.status(201).json({ message: "subscription level created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const patchSubscriptionLevel = (req, res, next) => {
  const { id } = req.params;
  sql`UPDATE subscriptions SET ${sql(req.body)} WHERE id=${id} RETURNING *`
    .then((subscription) => {
      console.log(subscription.statement.string);
      res.send(subscription[0]);
    })
    .catch(next);
};

const deleteSubsriptionLevelByID = (req, res, next) => {
  const { id } = req.params;
  sql` DELETE FROM subscriptions WHERE id=${id}`
    .then((subscription) => {
      console.log(subscription.statement.string);
      res.send(subscription[0]);
    })
    .catch(next);
};

export {
  getAllSubscriptions,
  getSubscriptionById,
  getSubscriptionsByCampaignId,
  postSubscriptionLevel,
  patchSubscriptionLevel,
  deleteSubsriptionLevelByID,
};
