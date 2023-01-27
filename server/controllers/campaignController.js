import { sql } from "./dbController.js"; //import database configs from dbController

const getAllCampaigns = (req, res, next) => {
  sql`SELECT * FROM campaigns`
    .then((campaigns) => {
      console.log("campaigns", campaigns);
      res.json(campaigns);
    })
    .catch(next);
};

const getCampaignById = (req, res, next) => {
  let id = req.params.id;
  sql`SELECT * FROM campaigns WHERE id=${id}`
    .then((campaign) => {
      if (campaign.length === 0) {
        res.set("Content-Type", "text/plain");
        res.status(404);
        res.send("Not Found");
      }
      res.json(campaign[0]);
    })
    .catch(next);
};

const postCreateCampaign = async (req, res, next) => {
  const { creator_id, title, description = null, banner = null } = req.body;

  //creator check function takes two parameters a creator ID and a table name.
  //returns a count of how many times it appears in the given table.
  const creatorCheck = async (creator_id, tableName) => {
    const result = await sql`SELECT COUNT(*) FROM ${sql(
      tableName
    )} WHERE id = ${creator_id}`;
    return parseInt(result[0].count);
  };

  try {
    //if 0 returns from calling creatorCheck on table "creators" the creator does not exist return 404
    const creatorExists = await creatorCheck(creator_id, "creators");
    if (creatorExists === 0) {
      return res.status(404).json({ message: "Creator not found" });
    }

    //if calling creatorCheck on table "campaigns" returns anything but 0, then the creator already has a campaign. return 409.
    const campaignExists = await creatorCheck(creator_id, "campaigns");
    if (campaignExists !== 0) {
      return res
        .status(409)
        .json({ message: "Campaign already exists for that creator" });
    }

    //creator new campaign in campaign table and return it with status 201
    const newCampaign =
      await sql`INSERT INTO campaigns (creator_id, title, description, banner) VALUES (${creator_id}, ${title}, ${description}, ${banner})RETURNING *`;
    res.status(201);
    res.json(newCampaign[0]);
  } catch (error) {
    console.log(error);
    next();
  }
};

export {
  getAllCampaigns,
  getCampaignById,
  postCreateCampaign,
  // patchCampaign,
  // deleteCampaign,
};
