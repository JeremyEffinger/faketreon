import React from "react";
import CreatorInfoState from "../../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import Card from "./Cards/Card.jsx";
import "./recentposts.css"

function RecentPosts(props) {
  const text = useRecoilValue(CreatorInfoState);

    return (
      <div className="recentposts">
        {text.posts.map((post, index) => {
          return <Card index={index} key={index} />;
          // we need to add post as a prop if we want to edit the posts eventually.
        })}
      </div>
    );
}

export default RecentPosts;
