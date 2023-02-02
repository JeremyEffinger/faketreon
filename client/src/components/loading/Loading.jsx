import React from "react";
import "./loading.css"
function Loading(){
    return (
        <div>
        <h1>
            Loading...
        </h1>
        <div className="container">
            <div className="spinner-box">
                <div className="configure-border-1">  
                    <div className="configure-core"></div>
                </div>  
                <div className="configure-border-2">
                    <div className="configure-core"></div>
                </div> 
            </div>
            </div>
      </div>
    )
}

export default Loading;