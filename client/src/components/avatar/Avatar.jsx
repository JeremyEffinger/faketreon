import React from "react";
import style from "../avatar/avatar.module.scss";
import { useRecoilValue } from "recoil";
import CreatorInfoState from "../../CreatorInfoState";

const Avatar = (props) => {
  const text = useRecoilValue(CreatorInfoState);
 

    return (
      <div className={style.avatar}>
        <img
          className={style.photo}
          src={text.user[0].avatar}
        />
        <h4>
          {text.campaigns[0].title}
        </h4>
        <div>
          {text.campaigns[0].description}
        </div>
      </div>
    );
}
export default Avatar;
