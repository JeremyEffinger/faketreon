import React from "react";
import { useRecoilValue } from "recoil";
import CreatorInfoState from "../../../CreatorInfoState";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./goals.css";

function Goals(props) {
  const text = useRecoilValue(CreatorInfoState);
  if(text.campaigns == null){
      return (<div></div>)
    } else { 

    return (
      <div>
        <div className="goals">
          <div className="firstLine">
            <div className="line"> Goals</div>
            <a className="line" href="">
              View all
            </a>
            <button className="line"><AiOutlineLeft/> </button>
            <button className="line"><AiOutlineRight/></button>
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
}
export default Goals;
