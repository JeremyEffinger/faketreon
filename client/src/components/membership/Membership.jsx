import React from "react";
import Card1 from "./Cards/Card1.jsx";
import Card2 from "./Cards/Card2.jsx";
import Card3 from "./Cards/Card3.jsx";
import "./membership.css";

export const Membership = (props) => {
  const dummyimage = "";
  return (
    <div>
      <h1>Select A Membership Level</h1>
      <div className="wrapper">
        <Card1 dummyimage={dummyimage} />
        <Card2 dummyimage={dummyimage} />
        <Card3 dummyimage={dummyimage} />
      </div>

      <div className="patrons">
        <h2>1,000</h2>
        <p>Patrons</p>
        <div>
          <button className="member__btn">Share</button>
          <button className="member__btn">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
