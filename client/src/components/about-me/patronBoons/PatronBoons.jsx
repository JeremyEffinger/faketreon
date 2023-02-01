import React from "react";
import { FaHeart } from "react-icons/fa";
import "./patronboons.css";

function PatronBoons(props) {
  return (
    <div>
      <div className="patron-boons">
        <h4>Become a patron</h4>
        <span className="images">
          <div className="pix">Unlock 178 exclusive posts</div>
          <div className="pix">
            <FaHeart />
            Be part of the community
          </div>
          <div className="pix">Get exclusive merch</div>
          <div className="pix">Connect via private message</div>
        </span>
      </div>
    </div>
  );
}

export default PatronBoons;
