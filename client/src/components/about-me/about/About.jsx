import React from "react";
import CreatorInfoState from "../../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import "./about.css";

function About(props) {
  const text = useRecoilValue(CreatorInfoState);

  return (
    <div className="about-box">
      <h1>{text.campaigns[0].title}</h1>
      <div>
        <div
          className="about"
          dangerouslySetInnerHTML={{ __html: text.campaigns[0].description }}
        ></div>
      </div>
    </div>
  );
}

export default About;
