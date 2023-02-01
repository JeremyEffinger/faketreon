import React from "react";
import { Suspense } from "react";
import Banner from "../../components/banner/Banner.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Membership from "../../components/membership/Membership.jsx";
import AboutMe from "../../components/about-me/AboutMe.jsx";
import Loading from "../../components/loading/Loading.jsx";

const Campaign = () => {
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
