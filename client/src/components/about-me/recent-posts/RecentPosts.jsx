import React from "react";
import CreatorInfoState from "../../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import Card from "./Cards/Card.jsx";

function RecentPosts(props) {
  const text = useRecoilValue(CreatorInfoState);

    return (
      <div className="recentposts">
        {text.posts.map((post, index) => {
          return <Card index={index} />;
        })}
      </div>
    );
}

export default RecentPosts;
