import React, {useState}from "react";

function Toggle() {

  const [isOn, setIsOn]= useState(false)
  
function handlClick(){
  setIsOn((isOn)=>!isOn)
}
const color= isOn? "red" : "white";



  return (
  <button style={{background:color}}onClick={handlClick}>{isOn?"on":"off"} </button>
  );
}



export default Toggle;
