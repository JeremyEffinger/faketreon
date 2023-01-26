import "./styling/App.css";
import axios from "axios";
import { useState } from "react";
import Avatar from "./components/avatar/avatar";
import Banner from "./components/banner/Banner.jsx";
import Header from "./components/header/Header.jsx";
import AboutMe from "./components/about-me/AboutMe.jsx"
import Footer from "./components/Footer/footer";


function App() {
  const [data, setData] = useState("{}");
  const urlWithProxy = "/api/v1";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <Header />
      <Banner />
      <Avatar />
      <AboutMe />
      <div>
        <button onClick={getDataFromServer}>Access server using proxy</button>
        <p>data : {data.message}</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
