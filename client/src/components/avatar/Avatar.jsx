import React from "react";
import { useRecoilValue } from "recoil";
import CreatorInfoState from "../../CreatorInfoState";
import "./avatar.css"

const Avatar = (props) => {
  const text = useRecoilValue(CreatorInfoState);

  return (
    <div>
      <img className="photo" src={text.user[0].avatar} />
      <h4>{text.campaigns[0].title}</h4>
      <div>{text.campaigns[0].bio}</div>
    </div>
  );
};
export default Avatar;
