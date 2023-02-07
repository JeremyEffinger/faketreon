import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import Loading from "../../components/loading/Loading.jsx";
import { useRecoilState, useRecoilValue } from "recoil";
import UrlNameState from "../../UrlNameState.jsx";
import CreatorInfoState from "../../CreatorInfoState.jsx";
import axios from "axios";
import { Carousel } from "./Carousel.jsx";

function HomePage(props) {
  const urlWithProxy = "/api/v1";
  const [username, setUserName] = useState([]);

  useEffect(() => {
    function getUsers() {
      axios
        .get(urlWithProxy + "/users")
        .then((res) => {
          setUserName(res.data);
        })
        .catch((err) => {
          err;
        });
    }
    getUsers();
  }, []);

  if (username.length != 0) {
    return (
      <Suspense fallback={<Loading />}>
        <div className="homePage">
          <div className="header">
            <h2 color="dark" className="Membership">
              Creativity powered by membership
            </h2>
          </div>
          <div>
            <a
              className="Button"
              type="button"
              href="https://www.patreon.com/create"
            >
              <div className="getStarted">Get Started</div>
            </a>
          </div>
          <div className="CarouselContainer">
            {username.map((user, index) => {
              return (
                <Carousel
                  username={"/" + user.name}
                  index={index}
                  user={user}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}

export default HomePage;
