import "./styling/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Campaign from "./containers/Campaign/Campaign.jsx";

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

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    setCurrentPath(pathArray[1]);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<Campaign currentPath={currentPath} />} />
        </Routes>
        <Footer />
        <div>
          <button onClick={getDataFromServer}>Access server using proxy</button>
          <p>data : {data.message}</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
