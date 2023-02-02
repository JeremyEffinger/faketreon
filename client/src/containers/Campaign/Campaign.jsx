import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { Suspense, lazy } from "react";
import Banner from "../../components/banner/Banner.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Membership from "../../components/membership/Membership.jsx";
import Loading from "../../components/loading/Loading.jsx";
import CreatorInfoState from "../../CreatorInfoState.jsx";
import UrlNameState from "../../UrlNameState.jsx";
//import AboutMe from "../../components/about-me/AboutMe.jsx";ß

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


  const AboutMe = lazy(() => delayForDemo(import('../../components/about-me/AboutMe.jsx')));


  async function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 5000);
    }).then(() => promise);
  }



  return (
    <div>
      <Suspense fallback={<Loading />}>  
      <Banner creatorData={creatorInfo} />
      <Avatar creatorData={creatorInfo} />
      <Membership creatorData={creatorInfo} />
      <AboutMe creatorData={creatorInfo} />
      </Suspense>
    </div>
  );
};

export default Campaign;
