import React from "react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import { Suspense, lazy } from "react";
import Loading from "../../components/loading/Loading.jsx";
import CreatorInfoState from "../../CreatorInfoState.jsx";
import UrlNameState from "../../UrlNameState.jsx";

//lazy function calls have to made at top level outside of the component
// in this case though, I require a deplay of minimum 20 ms so the data can be called from the DB

const Campaign = (props) => {
  const [currentUrl, setCurrentUrl] = useRecoilState(UrlNameState);

  const pathArray = window.location.pathname.split("/");
  useEffect(() => {
    setCurrentUrl(pathArray[1]);
  }, []);

  const Avatar = lazy(() =>
    delayForDemo(import("../../components/avatar/Avatar.jsx"))
  );
  const Banner = lazy(() =>
    delayForDemo(import("../../components/banner/Banner.jsx"))
  );
  const Membership = lazy(() =>
    delayForDemo(import("../../components/membership/Membership.jsx"))
  );
  const AboutMe = lazy(() => delayForDemo(import("../AboutMe/AboutMe.jsx")));

  const [creatorInfo, setCreatorInfo] = useRecoilState(CreatorInfoState);

  //const [creatorData, setCreatorData] = useState("{}");
  const urlWithProxy = "/api/v1";
  let username = useRecoilValue(UrlNameState);

  useEffect(() => {
    function getCreatorPageData() {
      axios
        .get(urlWithProxy + "/creatorcampaign/" + username)
        .then((res) => {
          //console.log(res.data)
          setCreatorInfo(res.data);
        })
        .catch((err) => {
          err;
        });
    }
    getCreatorPageData();
  }, [username]);

  async function delayForDemo(promise) {
    return new Promise((resolve) => {
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
