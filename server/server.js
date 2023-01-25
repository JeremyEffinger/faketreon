import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import postgress from "postgres";

//setup server
const PORT = 6000;
const server = express();

//setup database
const db_url = process.env.FAKETREON_DB_URL;
const sql = postgress(db_url);

//start middleware
server.use(express.json());

//api routes
server.get("/api/v1", (req, res) => {
  res.json({ message: "Hello!" });
});

//fail over routes
server.use((req, res, next) => {
  res.contentType("text/plain").status(404).send("Not Found");
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});
//start server
server.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
