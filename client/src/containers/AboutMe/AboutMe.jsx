import React from "react";
import About from "../../components/about-me/about/About.jsx";
import Goals from "../../components/about-me/goals/Goals.jsx";
import PatronBoons from "../../components/about-me/patronBoons/PatronBoons.jsx";
import RecentPosts from "../../components/about-me/recent-posts/RecentPosts.jsx";
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