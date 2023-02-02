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
        <React.Fragment>
        <div>
            <div className="goals">
                    <div className="firstLine">
                        <div className="line"> Goals</div><a className="goals__view" href="">View all</a>
                        <button className="arrow-left">left </button>
                        <button className="arrow-button">right</button>
                    </div>
                    <div>
                    <p className="p__patron">
                      <strong className="strong">100</strong> -
                       <span className="reached"> reached!</span>
                       &nbsp; patrons       
                    </p>
                    </div>
                    <div className="meter">
                    <span className="bar"></span>
                    </div>
                    <div>
                     <p className="goals__text">At the most basic level, the Kobolds create a dark and intermittent PDF for 5E play. We spend the money raised on the regular stable of Kobold Press artists, writers, and editors. This goal covers 6 issues a year. We can't ship a print game booklet at this level, but we'll be ready for the next level....</p>
                    </div>
                    <div>
                        10 of 20 tiers
                    </div>
                </div>
        </div>
        </React.Fragment>
    )
}
}

export default Goals
