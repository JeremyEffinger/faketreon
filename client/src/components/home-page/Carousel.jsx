import React from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const Carousel = (props) => {
  return (
    <div className="carousel">
      <img className="photo" src={props.username[0].avatar} />
      {console.log(props.username)}
    </div>
  );
};
