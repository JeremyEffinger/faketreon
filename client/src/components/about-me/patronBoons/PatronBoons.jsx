import React from "react";
import { FaHeart } from "react-icons/fa";
import CreatorInfoState from "../../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import "./patronboons.css";

function PatronBoons(props) {
  const text = useRecoilValue(CreatorInfoState);
  const postcount = text.posts.length;
  return (
    <div>
      <div className="patron-boons">
        <h4>Become a patron</h4>
        <span className="images">
          <div className="pix">Unlock {postcount} exclusive blog posts</div>
          <div className="community__text">
            <FaHeart className="styles__heart" size={20} />
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
