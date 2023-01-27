import { sql } from "./dbController.js"; //import database configs from dbController

const getAllCampaigns = (req, res, next) => {
  sql`SELECT * FROM campaigns`
    .then((campaigns) => {
      console.log("campaigns", campaigns);
      res.json(campaigns);
    })
    .catch(next);
};

export {
  getAllCampaigns,
  // getCampaignById,
  // postCreateCampaign,
  // patchCampaign,
  // deleteCampaign,
};
