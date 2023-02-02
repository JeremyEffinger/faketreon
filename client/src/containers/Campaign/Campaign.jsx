import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import Banner from "../../components/banner/Banner.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Membership from "../../components/membership/Membership.jsx";
import AboutMe from "../../components/about-me/AboutMe.jsx";
import CreatorInfoState from "../../CreatorInfoState.jsx";
import UrlNameState from "../../UrlNameState.jsx";

const Campaign = (props) => {


  const [creatorInfo, setCreatorInfo] = useRecoilState(CreatorInfoState);


  //const [creatorData, setCreatorData] = useState("{}");
  const urlWithProxy = "/api/v1";
  let username = useRecoilValue(UrlNameState);

  useEffect(() => {
    function getCreatorPageData() {
      axios
        .get(urlWithProxy + "/creatorcampaign/" + username)
        .then((res) => {
          console.log(res.data)
          setCreatorInfo(res.data)})
        .catch((err) => {
          err;
        });
    }
    getCreatorPageData();
  }, [username]);

  //console.log("creator info:", creatorInfo.user[0].id);
  console.log("URL", useRecoilValue(UrlNameState))

  return (
    <div>
      <Banner creatorData={creatorInfo} />
      <Avatar creatorData={creatorInfo} />
      <Membership creatorData={creatorInfo} />
      <AboutMe creatorData={creatorInfo} />
    </div>
  );
};

export default Campaign;
