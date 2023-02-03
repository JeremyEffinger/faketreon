import React from "react";
import CreatorInfoState from "../../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import Card from "./Cards/Card.jsx";

function RecentPosts(props) {
  const text = useRecoilValue(CreatorInfoState);
  if (text.campaigns == null) {
    return <div></div>;
  } else {
    return (
      <div className="recentposts">
        {text.posts.map((post, index) => {
          return <Card index={index} key={index} />;
        })}
      </div>
    );
  }
}

export default RecentPosts;
