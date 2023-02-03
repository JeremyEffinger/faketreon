import React from "react";
import { Link } from 'react-router-dom';
import "./homePage.css";

function HomePage (){
    return (
        <div>
            <div className="homePage">
                Creativity inspired by Money
                <Link to="/posts">
                  <button>Posts</button>
                </Link>
            </div>
        </div>
    )


};

export default HomePage