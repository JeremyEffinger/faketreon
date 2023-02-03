import React from "react";
import CreatorInfoState from "../../CreatorInfoState";
import { useRecoilValue } from "recoil";
import { lazy } from "react";
import "./membership.css";

const Card = lazy(() => import("./Card/Card.jsx"));

export const Membership = (props) => {
  const text = useRecoilValue(CreatorInfoState);
    return (
      <div>
        <h1>Select A Membership Level</h1>
        <div className="wrapper">
          {text.subscriptionLevels[0].subscriptions.map(
            (subscription, index) => {
              return (
                <Card index={index} key={index} subscription={subscription} />
              );
            }
          )}
        </div>
        <div className="patrons">
          <h2>1,000</h2>
          <p>Patrons</p>
          <div>
            <button className="member__btn">Share</button>
            <button className="member__btn">Follow</button>
          </div>
        </div>
      </div>
    );
};

export default Membership;
