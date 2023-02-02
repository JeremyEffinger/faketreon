import React from "react";
import { Suspense, lazy } from "react";
import Banner from "../../components/banner/Banner.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Membership from "../../components/membership/Membership.jsx";
//import AboutMe from "../../components/about-me/AboutMe.jsx";
import Loading from "../../components/loading/Loading.jsx";

const Campaign = () => {

  const AboutMe = lazy(() => delayForDemo(import('../../components/about-me/AboutMe.jsx')));


  async function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 100000);
    }).then(() => promise);
  }



  return (
    <div>
      <Suspense fallback={<Loading />}>  
        <Banner />
        <Avatar />
        <Membership />
        <AboutMe />
      </ Suspense>
    </div>
  );
};

export default Campaign;
