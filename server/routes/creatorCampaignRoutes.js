import express from "express";
import * as creatorCampaignController from "../controllers/creatorCampaignController.js"; //import methods for querying creator info.

const router = express.Router();

router.get("/:username", creatorCampaignController.getDataByUsername);

export default router; //export routes
