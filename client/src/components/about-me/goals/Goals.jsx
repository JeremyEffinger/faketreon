import React from "react";
import { useRecoilValue } from "recoil";
import CreatorState from "../../../CreatorInfoState";
import "./goals.css";

function Goals(props) {
  let text = useRecoilValue(CreatorState);

  return (
    <div>
      <div className="goals">
        <div className="firstLine">
          <div className="line"> Goals on the left</div>
          <a className="line" href="">
            link to view all
          </a>
          <button className="line">left</button>
          <button className="line">right</button>
        </div>
        <div>
          <p>Number of patrons 700/1000 or something</p>
        </div>
        <div>Loading bar with CSS ---------</div>
        <div>
          <h4>Title of next tier rewards</h4>
          description of rewards
        </div>
        <div>10 of 20 tiers</div>
      </div>
    </div>
  );
}

export default Goals;
