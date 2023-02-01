import "./styling/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CreatorInfoState from "./CreatorInfoState";
import UrlNameState from "./UrlNameState";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Campaign from "./containers/Campaign/Campaign.jsx";

function App() {
  //---> pretty sure all of this can just go into campaign.
  // const [data, setData] = useState("{}");
//   const urlWithProxy = "/api/v1";

// const [creatorInfo, setCreatorInfo ] = useRecoilState(CreatorInfoState)

//   function getDataFromServer() {
//     axios
//       .get(urlWithProxy)
//       .then((res) => setCreatorInfo(res.data))
//       .catch((err) => {
//         console.error(err);
//       });
//   }

  //const [currentPath, setCurrentPath] = useState("");
  const [currentUrl, setCurrentUrl] = useRecoilState(UrlNameState)

  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    setCurrentUrl(pathArray[1]);
  }, []);


  // useEffect(() => {
  //   const pathArray = window.location.pathname.split("/");
  //   setCurrentPath(pathArray[1]);
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<Campaign currentPath={currentUrl} />} />
        </Routes>
        <Footer />
        {/* <div>
          <button onClick={getDataFromServer}>Access server using proxy</button>
          <p>data : {console.log(creatorInfo)}</p>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
