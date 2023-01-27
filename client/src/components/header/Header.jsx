 import React from "react";
 import "./header.css";
 //import recoil from "recoil";

 function Header(props){

    // this can be run with onChange with set timeout
    // or onBlur
    // or onSubmit if using a form we will probably use a form
    // but for now it will be onBlur

    function handleBlur(event) {
        let value = event.target.value
        console.log(value)
    }

 return (
   <div className="container">
      <header className="header">
         <a rel="stylesheet" href="https://www.google.com" >link1</a>
         <input onBlur={handleBlur}type="text"/>
         <button  type="submit">BUTTONS</button>
         <a rel="stylesheet" href="https://www.google.com" >link2</a>   
         <a rel="stylesheet" href="https://www.google.com" >link3</a>
      </header>
    </div>
    )
 }


 export default Header;