import React from "react";
import "./Carousel.css";
import { Outlet, Link } from "react-router-dom";

export const Carousel = (props) => {
  return (
    <div className="carousel">
      <Link to={props.username}>
        <img className="photo" src={props.user.avatar} />
      </Link>
    </div>
  );
};
