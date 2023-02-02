import { atom, selector } from "recoil";

const CreatorInfoState = atom({
  key: "CreatorInfoState",
  default: {}
  });

export default CreatorInfoState;

// {
//   "userId": 1,
//   "campaigns": [
//     {
//       "id": 1,
//       "creator_id": 1,
//       "title": "Campaign One",
//       "description": "Description of campaign one",
//       "banner": "https://example.com/campaign_1_banner.jpg",
//       "created_at": "2023-01-30T21:08:32.450Z",
//       "updated_at": "2023-01-30T21:08:32.450Z"
//     }
//   ],
//   "subscriptionLevels": [
//     {
//       "campaignId": 1,
//       "subscriptions": [
//         {
//           "id": 1,
//           "campaign_id": 1,
//           "level": 1,
//           "rewards": "Reward for level 1",
//           "amount": 10,
//           "art": "static/images/membership-img/lvl1.webp",
//           "created_at": "2023-01-30T21:08:32.450Z",
//           "updated_at": "2023-01-30T21:08:32.450Z"
//         },
//         {
//           "id": 2,
//           "campaign_id": 1,
//           "level": 2,
//           "rewards": "Reward for level 2",
//           "amount": 20,
//           "art": "static/images/membership-img/lvl2.webp",
//           "created_at": "2023-01-30T21:08:32.450Z",
//           "updated_at": "2023-01-30T21:08:32.450Z"
//         }
//       ]
//     }
//   ]
// }