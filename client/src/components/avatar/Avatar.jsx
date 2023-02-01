import React from "react";
import style from "../avatar/avatar.module.scss";

const Avatar = (props) => {
  return (
    <div className={style.avatar}>
      <img
        className={style.photo}
        src={"static/images/avatars/dummyPhoto.png"}
      />
    </div>
  );
};

export default Avatar;
