import "./styling/App.css";
import axios from "axios";
import { useState } from "react";
import Header from "../src/components/Header.jsx"


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
    <div>
      < Header/>
    <div className="App">
      <button onClick={getDataFromServer}>Access server using proxy</button>
      <p>data : {data.message}</p>
    </div>
    </div>
  );
}

export default App;
