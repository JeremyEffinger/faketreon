import express from "express";
import * as campaignController from "../controllers/campaignController.js"; //import methods for querying creator info.

const router = express.Router();

router.get("/", campaignController.getAllCampaigns);
// router.get("/:id", creatorController.getCreatorById);
// router.post("/", creatorController.postCreateCreator);
// router.patch("/:id", creatorController.patchCreator);
// router.delete("/:id", creatorController.deleteCreator);

export default router; //export routes
