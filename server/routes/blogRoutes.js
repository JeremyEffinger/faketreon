import express from "express";
import * as blogController from "../controllers/blogController.js"; //import methods for querying Blog info.

const router = express.Router();

router.get("/", blogController.getAllBlogPosts);
router.get("/:id", blogController.getBlogPostId);
// router.get("/creator/:id", blogController.getBlogPostsByCreatorID)
// router.post("/", blogController.postBlogPost);
// router.patch("/:id", blogController.patchBlogPost);
// router.delete("/:id", blogController.deleteBlogPostByID);

export default router; //export routes
