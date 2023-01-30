import { sql } from "./dbController.js"; //import database configs from dbController

const getAllBlogPosts = (req, res, next) => {
  sql`SELECT * FROM posts`
    .then((posts) => {
      console.log("posts", posts);
      res.json(posts);
    })
    .catch(next);
};

const getBlogPostById = (req, res, next) => {
  let id = req.params.id;
  sql`SELECT * FROM posts WHERE id=${id}`
    .then((post) => {
      if (post.length === 0) {
        res.set("Content-Type", "text/plain");
        res.status(404);
        res.send("Not Found");
      }
      res.json(post[0]);
    })
    .catch(next);
};

export {
  getAllBlogPosts,
  getBlogPostById,
  //   getBlogPostsByCreatorID,
  //   postBlogPost,
  //   patchBlogPost,
  //   deleteBlogPostByID,
};
