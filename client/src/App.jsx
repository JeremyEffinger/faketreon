import "./styling/App.css";
import axios from "axios";
import { Suspense, useState } from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Campaign from "./containers/Campaign/Campaign.jsx";
import Loading from "./components/loading/Loading";

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
        <Campaign />
      <div>
        <button onClick={getDataFromServer}>Access server using proxy</button>
        <p>data : {data.message}</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
