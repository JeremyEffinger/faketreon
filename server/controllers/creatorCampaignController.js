import { sql } from "./dbController.js"; //import database configs from dbController

const getDataByUsername = async (req, res, next) => {
  const username = req.params.username;

  // check if the user exists
  const userCheck = async (username) => {
    const result =
      await sql`SELECT COUNT(*) FROM users WHERE name = ${username}`;
    return parseInt(result[0].count);
  };

  try {
    const userExists = await userCheck(username);
    if (userExists === 0) {
      return res.status(404).json({ message: "user not found" });
    }

    // get the user's id
    const userId =
      await sql`SELECT id, name, avatar FROM users WHERE name = ${username}`;

    // get all the user's campaigns
    const campaigns = await sql`
        SELECT * FROM campaigns WHERE creator_id = ${userId[0].id}
      `;

    // get all subscriptions for each of the user's campaigns
    const subscriptionLevels = [];
    for (let campaign of campaigns) {
      const subs = await sql`
          SELECT * FROM subscriptions WHERE campaign_id = ${campaign.id}
        `;
      subscriptionLevels.push({
        campaignId: campaign.id,
        subscriptions: subs,
      });
    }

    const posts = await sql`
    SELECT * FROM posts WHERE campaign_id = ${campaigns[0].id}
  `;

    res.json({
      user: userId,
      campaigns: campaigns,
      subscriptionLevels: subscriptionLevels,
      posts: posts,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getDataByUsername };
