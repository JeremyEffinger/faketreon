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

//to do refine this.
const postCreateCreator = (req, res, next) => {
  const requiredKeys = ["user_id", "name"];
  if (requiredKeys.every((key) => req.body.hasOwnProperty(key))) {
    sql`INSERT INTO creators (user_id, name) VALUES (${req.body.user_id},${req.body.name}) RETURNING *;`
      .then((creator) => {
        res.status(201);
        res.json(creator[0]);
      })
      .catch(next);
  } else {
    res.status(400).send("Bad Request");
    console.log(req.body);
  }
};

export { getAllCreators, getCreatorById, postCreateCreator };
