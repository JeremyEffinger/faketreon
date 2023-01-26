import React from "react";
import "./aboutMe.css";

function AboutMe(){

    return(
        <div className="container">
            <div>
                <div className="about">
                    <h4>
                    This will be the title of the about me
                    </h4>
                    <p>
                    This is the context of the about me section. For right now this will be dummytext. 
                    But eventually this will be an editable string in the psql database that an authenticated
                    user for this faketreon page
                    </p>
                </div>
                <div className="goals">
                    <div className="firstLine">
                        <div className="line"> Goals on the left</div><a className="line" href="">link to view all</a><button className="line">left</button><button className="line">right</button>
                    </div>
                    <div>
                        Number of patrons 700/1000 or something
                    </div>
                    <div>
                        Loading bar with CSS ---------
                    </div>
                    <div>
                        <h4>Title of next tier rewards</h4>
                        description of rewards
                    </div>
                    <div>
                        10 of 20 tiers
                    </div>
                </div>
                <div className="patronBoons">
                    <h4>
                        become a patron
                    </h4>
                    <span className="images">
                        <div className="pix">
                        image 1
                        </div>
                        <div className="pix">
                        image 2   
                        </div>
                        <div className="pix">
                        image 3    
                        </div>
                        <div className="pix">
                        image 4   
                        </div>
                    </span>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default AboutMe;