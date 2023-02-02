import React from "react";
import Card1 from "./Cards/Card1.jsx";
import Card2 from "./Cards/Card2.jsx";
import Card3 from "./Cards/Card3.jsx";

function RecentPosts(props) {

  return (
    <div className="recentposts">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

export default RecentPosts;
