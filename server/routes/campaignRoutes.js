import express from "express";
import * as campaignController from "../controllers/campaignController.js"; //import methods for querying creator info.

const router = express.Router();

router.get("/", campaignController.getAllCampaigns);
router.get("/:id", campaignController.getCampaignById);
router.post("/", campaignController.postCreateCampaign);
// router.patch("/:id", campaignController.patchCampaign);
// router.delete("/:id", campaignController.deleteCampaign);

export default router; //export routes
