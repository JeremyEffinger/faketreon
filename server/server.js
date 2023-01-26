import express from "express";
import userRoutes from "./routes/usersRoutes.js";

//setup server
const PORT = 6000;
const server = express();

//start middleware
server.use(express.json());

//api routes
server.get("/api/v1", (req, res) => {
  res.json({ message: "Hello!" });
});

// Users routes
server.use("/api/v1/users", userRoutes);

// Creators routes
server.get("/api/v1/creators", (req, res, next) => {});
server.get("/api/v1/creators/:id", (req, res, next) => {});
server.post("/api/v1/creators", (req, res, next) => {});
server.put("/api/v1/creators/:id", (req, res, next) => {});
server.delete("/api/v1/creators/:id", (req, res, next) => {});

// Campaigns routes continued
server.post("/api/v1/campaigns", (req, res, next) => {});
server.put("/api/v1/campaigns/:id", (req, res, next) => {});
server.delete("/api/v1/campaigns/:id", (req, res, next) => {});

// Subscriptions routes
server.get("/api/v1/subscriptions", (req, res, next) => {});
server.get("/api/v1/subscriptions/:id", (req, res, next) => {});
server.post("/api/v1/subscriptions", (req, res, next) => {});
server.put("/api/v1/subscriptions/:id", (req, res, next) => {});
server.delete("/api/v1/subscriptions/:id", (req, res, next) => {});

// Supporters routes
server.get("/api/v1/supporters", (req, res, next) => {});
server.get("/api/v1/supporters/:id", (req, res, next) => {});
server.post("/api/v1/supporters", (req, res, next) => {});
server.put("/api/v1/supporters/:id", (req, res, next) => {});
server.delete("/api/v1/supporters/:id", (req, res, next) => {});

// Blog routes
server.get("/api/v1/blogs", (req, res, next) => {});
server.get("/api/v1/blogs/:id", (req, res, next) => {});
server.post("/api/v1/blogs", (req, res, next) => {});
server.put("/api/v1/blogs/:id", (req, res, next) => {});
server.delete("/api/v1/blogs/:id", (req, res, next) => {});

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
