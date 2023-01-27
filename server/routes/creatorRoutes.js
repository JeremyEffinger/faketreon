import express from "express";
import * as creatorController from "../controllers/creatorController.js"; //import methods for querying creator info.

const router = express.Router();

router.get("/", creatorController.getAllCreators);
router.get("/:id", creatorController.getCreatorById);
router.post("/", creatorController.postCreateCreator);
router.patch("/:id", creatorController.patchCreator);
router.delete("/:id", creatorController.deleteCreator);

export default router; //export routes
