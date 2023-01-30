import express from "express";
import * as subscriptionController from "../controllers/subscriptionController.js"; //import methods for querying Blog info.

const router = express.Router();

router.get("/", subscriptionController.getAllSubscriptions);
router.get("/:id", subscriptionController.getSubscriptionById);
router.get(
  "/campaign/:id",
  subscriptionController.getSubscriptionsByCampaignId
);
router.post("/", subscriptionController.postSubscriptionLevel);
router.patch("/:id", subscriptionController.patchSubscriptionLevel);
router.delete("/:id", subscriptionController.deleteSubsriptionLevelByID);

export default router; //export routes
