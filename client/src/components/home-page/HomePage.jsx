import React from "react";
import { Link } from 'react-router-dom';
import "./homePage.css";

function HomePage (){

    async function handleClick(){

        const pathArray = window.location.pathname.split("/");
        console.log(pathArray)

    //     useEffect(() => {
    //     setCurrentUrl(pathArray[1]);
    //   }, []);
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
                        <Link to="/koboldpress">
                            KoboldPress
                        </Link>
                    </div>
                    <div>
                        <Link to="/something">
                            Someone Else
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )


};

export default HomePage