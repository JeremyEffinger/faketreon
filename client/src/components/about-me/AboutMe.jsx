import React from "react";
import About from "./about/About.jsx";
import Goals from "./goals/Goals.jsx";
import PatronBoons from "./patronBoons/PatronBoons.jsx";
import "./aboutMe.css";

function AboutMe(props){

    return(
        <div className="container">
            <About/>
            <Goals/>
            <PatronBoons/>
        </div>
    )
}

export default AboutMe;