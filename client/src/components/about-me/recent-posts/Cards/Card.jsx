import CreatorInfoState from "../../../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import "./card.css";

export const Card = (props) => {
  const index = props.index;
  const text = useRecoilValue(CreatorInfoState);
  if (text.campaigns == null) {
    return <div></div>;
  } else {
    return (
      <div className="card2">
        <div className="card2__body">
          <img
            className="card2__image"
            src={text.subscriptionLevels[0].subscriptions[index].art}
          />
          <h2 className="card2__title">{text.posts[index].title}</h2>
          <p className="card2__description">{text.posts[index].content}</p>
        </div>
        <button className="card2__btn">
          <a className="comment">Comments</a>
          <a className="like">Likes</a>
        </button>
      </div>
    );
  }
};
export default Card;
