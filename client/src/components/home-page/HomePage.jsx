import React from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./homePage.css";
import { useRecoilState, useRecoilValue } from "recoil";
import UrlNameState from "../../UrlNameState.jsx";
import CreatorInfoState from "../../CreatorInfoState.jsx";
import axios from "axios";
import { Carousel } from "./Carousel.jsx";

function HomePage (props){

    const urlWithProxy = "/api/v1";
    const [username, setUserName] = ([]);
  
    useEffect(() => {
      function getUsers() {
        axios
          .get(urlWithProxy + "/users")
          .then((res) => {
            console.log(res.data)
            setUserName(res.data)})
          .catch((err) => {
            err;
          });
      }
      getUsers();
    }, [username]);

    return (
    <div className="homePage">
        <div className="header">
            <h2 color="dark" className="Membership">Creativity powered by membership</h2>
        </div>
            <div>
            <a className="Button" type="button" href="https://www.patreon.com/create">
                <div className="getStarted">
                    Get Started
                </div>
            </a>
        </div>

        <Carousel username={username} />

    </div>
    )


};

export default HomePage

