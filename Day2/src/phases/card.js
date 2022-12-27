import React, { useState,useEffect } from 'react'
import './phase.css'

function Card() {
    const [state,setState]=useState("https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-N-300620221053.jpg&w=872&h=578&q=75&c=1");
    
    useEffect(()=>{
        console.log("effect");
        return()=>{
            console.log("gghcgh");
            // alert("it will called before enter unmount phase");
        }
    });
    return (
    <div className='cont'>
      <img src={state} alt=""  height="300px" width="300px"  />
      <h2>car image</h2>
      <button onClick={()=>{
        setState("https://imgd.aeplcdn.com/1280x720/n/cw/ec/130323/tork-kratos-left-side-view2.jpeg?isig=0");}}>
            Bike</button>
      <button onClick={()=>{
        setState("https://b.zmtcdn.com/data/pictures/chains/1/18412861/fe8c80fa162c790264a597b45e7e6580.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*");}}>
            pizza</button>
    </div>
  )
}

export default Card
