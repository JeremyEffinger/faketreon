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

const getBlogPostsByCreatorID = async (req, res, next) => {
  const creator_id = req.params.id;

  // check if the creator exists
  const creatorCheck = async (creator_id) => {
    const result =
      await sql`SELECT COUNT(*) FROM creators WHERE id = ${creator_id}`;
    return parseInt(result[0].count);
  };

  try {
    const creatorExists = await creatorCheck(creator_id);
    if (creatorExists === 0) {
      return res.status(404).json({ message: "Creator not found" });
    }

    // get all posts made by the creator
    const posts = await sql`
        SELECT * FROM posts
        JOIN campaigns ON posts.campaign_id = campaigns.id
        WHERE campaigns.creator_id = ${creator_id}
      `;
    res.json(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const postBlogPost = async (req, res, next) => {
  const { campaign_id, title, content } = req.body;

  //check if the campaign exists
  const campaignCheck = async (campaign_id) => {
    const result =
      await sql`SELECT COUNT(*) FROM campaigns WHERE id = ${campaign_id}`;
    return parseInt(result[0].count);
  };

  try {
    //if 0 returns from calling campaignCheck the campaign does not exist, return 404
    const campaignExists = await campaignCheck(campaign_id);
    if (campaignExists === 0) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    //create a new blog post
    const newBlogPost =
      await sql`INSERT INTO posts (campaign_id, title, content) 
                               VALUES (${campaign_id}, ${title}, ${content}) 
                               RETURNING *`;
    res.status(201);
    res.json(newBlogPost[0]);
  } catch (error) {
    next(error);
  }
};

const patchBlogPost = (req, res, next) => {
  const { id } = req.params;
  sql`UPDATE posts SET ${sql(req.body)} WHERE id=${id} RETURNING *`
    .then((post) => {
      console.log(post.statement.string);
      res.send(post[0]);
    })
    .catch(next);
};

const deleteBlogPostByID = (req, res, next) => {
  const { id } = req.params;
  sql` DELETE FROM posts WHERE id=${id}`
    .then((post) => {
      console.log(post.statement.string);
      res.send(post[0]);
    })
    .catch(next);
};

export {
  getAllBlogPosts,
  getBlogPostById,
  getBlogPostsByCreatorID,
  postBlogPost,
  patchBlogPost,
  deleteBlogPostByID,
};
