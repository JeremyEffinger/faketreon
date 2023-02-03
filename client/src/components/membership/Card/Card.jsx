import CreatorInfoState from "../../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import "./card.css";

export const Card = (props) => {
  const index = props.index;
  const text = useRecoilValue(CreatorInfoState);
    return (
      <div className="card">
        <div className="card__body">
          <img
            className="card__image"
            src={text.subscriptionLevels[0].subscriptions[index].art}
          />
          <h2 className="card__title">
            {"$" +
              text.subscriptionLevels[0].subscriptions[index].amount +
              " / month"}
          </h2>
          <ul>
            <p className="card__description">
              {text.subscriptionLevels[0].subscriptions[index].rewards.map(
                (reward, index) => {
                  return (
                    <li key={index} className="rewardItem">
                      {reward}
                    </li>
                  );
                }
              )}
            </p>
          </ul>
        </div>
        <button className="card__btn">Join</button>
      </div>
    );
};
export default Card;
