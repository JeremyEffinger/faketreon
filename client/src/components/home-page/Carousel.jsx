import React from "react";
import "./Carousel.css";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const Carousel = (props) => {
  return (
    <div className="carousel">
      <Link to="/trashtaste">
        <img className="photo" src={props.username[1].avatar} />
      </Link>
      <Link to="/koboldpress">
        <img className="photo" src={props.username[0].avatar} />
      </Link>
      <Link to="/trashtaste">
        <img className="photo" src={props.username[1].avatar} />
      </Link>
      <Link to="/koboldpress">
        <img className="photo" src={props.username[0].avatar} />
      </Link>
    </div>
  );
};
