import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./carousel.css";

export const Carousel = (props) => {
  return (
    <div className="carousel">
      <Link to={props.username}>
        <img className="photo" src={props.user.avatar} />
      </Link>
    </div>
  );
};
