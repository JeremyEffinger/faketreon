import React from "react";
import About from "./about/About.jsx";
import Goals from "./goals/Goals.jsx";
import PatronBoons from "./patronBoons/PatronBoons.jsx";
import RecentPosts from "./recent-posts/RecentPosts.jsx";
import CreatorState from "../../CreatorInfoState.jsx";
import "./aboutMe.css";

function AboutMe(props){

    return(
        <div className="container1">
            <div className="container">
                <About/>
                <Goals/>
                <PatronBoons/>
                <RecentPosts/>
            </div>
        </div>
    )
}

export default AboutMe;