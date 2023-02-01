import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../components/banner/Banner.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Membership from "../../components/membership/Membership.jsx";
import AboutMe from "../../components/about-me/AboutMe.jsx";

const Campaign = (props) => {
  console.log(props.currentPath);

  const [creatorData, setCreatorData] = useState("{}");
  const urlWithProxy = "/api/v1";

  useEffect(() => {
    function getCreatorPageData() {
      axios
        .get(urlWithProxy + "/creatorcampaign/" + props.currentPath)
        .then((res) => setCreatorData(res.data))
        .catch((err) => {
          err;
        });
    }
    getCreatorPageData();
  }, [props.currentPath]);

  console.log(creatorData);

  return (
    <div>
      <Banner creatorData={creatorData} />
      <Avatar creatorData={creatorData} />
      <Membership creatorData={creatorData} />
      <AboutMe creatorData={creatorData} />
    </div>
  );
};

export default Campaign;
