import React from "react";
import { Link } from 'react-router-dom';
import "./homePage.css";
import { useRecoilState, useRecoilValue } from "recoil";
import UrlNameState from "../../UrlNameState";

function HomePage (){


    const [currentUrl, setCurrentUrl] = useRecoilState(UrlNameState)



  function handleClick(){

        const pathArray = window.location.pathname.split("/");
        setCurrentUrl(pathArray[1]);
        useRecoilValue(currentUrl)

    }

    return (
        <div>
            <div className="homePage">
                Creativity inspired by Money
                <Link to="/posts">
                  <button>Posts</button>
                </Link>

                <div className="carousel">
                    <div>
                        <Link to="/trashtaste" onClick={handleClick}>
                            TrashTaste
                        </Link>
                    </div>
                    <div>
                        <Link to="/koboldpress" onClick={handleClick}>
                            KoboldPress
                        </Link>
                    </div>
                    <div>
                        <Link to="/something" onClick={handleClick}>
                            Someone Else
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )


};

export default HomePage