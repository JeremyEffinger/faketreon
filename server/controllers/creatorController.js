import { sql } from "./dbController.js"; //import database configs from dbController

const getAllCreators = (req, res, next) => {
  sql`SELECT * FROM creators`
    .then((creators) => {
      console.log("creators", creators);
      res.json(creators);
    })
    .catch(next);
};

const getCreatorById = (req, res, next) => {
  let id = req.params.id;
  sql`SELECT * FROM creators WHERE id=${id}`
    .then((creator) => {
      if (creator.length === 0) {
        res.set("Content-Type", "text/plain");
        res.status(404);
        res.send("Not Found");
      }
      res.json(creator[0]);
    })
    .catch(next);
};

//This code had to be written using async and await. Promise chaining was too difficult to do.
const postCreateCreator = async (req, res, next) => {
  const { user_id, name, bio = null } = req.body;

  //user check function takes two parameters a user ID and a table name.
  //returns a count of how many times it appears in the given table.
  const userCheck = async (user_id, tableName) => {
    const result = await sql`SELECT COUNT(*) FROM ${sql(
      tableName
    )} WHERE id = ${user_id}`;
    return parseInt(result[0].count);
  };

  try {
    //if 0 returns from calling userCheck on table "users" the user does not exist return 404
    const userExists = await userCheck(user_id, "users");
    if (userExists === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    //if calling userCheck on table "creators" returns anything but 0, then the creator already exists. return 409.
    const creatorExists = await userCheck(user_id, "creators");
    if (creatorExists !== 0) {
      return res.status(409).json({ message: "Creator already exists" });
    }

    //creator new Creator in creattaors table and return it with status 201
    const newCreator =
      await sql`INSERT INTO creators (user_id, name, bio) VALUES (${user_id}, ${name}, ${bio})RETURNING *`;
    res.status(201);
    res.json(newCreator[0]);
  } catch (error) {
    console.log(error);
    next();
  }
};

const patchCreator = (req, res, next) => {
  const { id } = req.params;
  sql`UPDATE creators SET ${sql(req.body)} WHERE id=${id} RETURNING *`
    .then((creator) => {
      console.log(creator.statement.string);
      res.send(creator[0]);
    })
    .catch(next);
};

const deleteCreator = (req, res, next) => {
  const { id } = req.params;
  sql` DELETE FROM creators WHERE id=${id}`
    .then((creator) => {
      console.log(creator.statement.string);
      res.send(creator[0]);
    })
    .catch(next);
};

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
    const userId = await sql`SELECT id FROM users WHERE name = ${username}`;

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

    res.json({
      userId: userId[0].id,
      campaigns: campaigns,
      subscriptionLevels: subscriptionLevels,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export {
  getAllCreators,
  getCreatorById,
  postCreateCreator,
  patchCreator,
  deleteCreator,
  getDataByUsername,
};
