import { sql } from "./dbController.js"; //import database configs from dbController

const getAllUsers = (req, res, next) => {
  sql`SELECT * FROM users`
    .then((users) => {
      console.log("users", users);
      res.json(users);
    })
    .catch(next);
};

const getUserById = (req, res, next) => {
  let id = req.params.id;
  sql`SELECT * FROM users WHERE id=${id}`
    .then((user) => {
      if (user.length === 0) {
        res.set("Content-Type", "text/plain");
        res.status(404);
        res.send("Not Found");
      }
      res.json(user[0]);
    })
    .catch(next);
};

const postCreateUser = (req, res, next) => {
  const requiredKeys = ["email", "password", "name"];
  if (requiredKeys.every((key) => req.body.hasOwnProperty(key))) {
    sql`INSERT INTO users (email, name, password) VALUES (${req.body.email},${req.body.password},${req.body.name}) RETURNING *;`
      .then((user) => {
        res.status(201);
        res.json(user[0]);
      })
      .catch(next);
  } else {
    res.status(400).send("Bad Request");
    console.log(req.body);
  }
};

export { getAllUsers, getUserById, postCreateUser };
