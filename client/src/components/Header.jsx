 import React from "react";
 //import recoil from "recoil";

 function Header(){

    // this can be run with onChange with set timeout
    // or onBlur
    // or onSubmit if using a form we will probably use a form
    // but for now it will be onBlur

    function handleBlur(event) {
        let value = event.target.value
        console.log(value)
    }

 return (
    <header>
    <a rel="stylesheet" href="https://www.google.com" >link1</a>
    <input onBlur={handleBlur}type="text"/>
    <button  type="submit">BUTTONS</button>
    <a rel="stylesheet" href="https://www.google.com" >link2</a>   
    <a rel="stylesheet" href="https://www.google.com" >link3</a>
    </header>
    )
 }


 export default Header;