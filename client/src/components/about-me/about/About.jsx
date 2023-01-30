import React from "react";
import CreatorState from "../../../CreatorState";
import {useRecoilValue} from "recoil"

function About(){
    const text = useRecoilValue(CreatorState)
    return (
        <div>
            <div className="about">
                    <h4>
                    {text.campaigns[0].title}
                    </h4>
                    <p className="about-section">
                    {text.campaigns[0].description}
                    </p>
                </div>
        </div>
    )
}

export default About