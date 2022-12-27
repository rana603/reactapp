import React, { useState } from 'react';
import './counter.css';

function Counter() {
const[counta,setCounta]=useState(0);
const[countb,setCountb]=useState(0);
const[countc,setCountc]=useState(0);

const handleChange = (value) =>{ 
  if(value === 0){
    setCounta(counta * 0); 
}else{
    setCounta(counta + value);
}
}
const handleChangeb = (value) =>{ 
  setCountb(countb + value);
}
const handleChangec = (value) =>{ 
  setCountc(countc + value);
}

  return (
    <div className='cont'>
      <div className='subcont'>
        <h4>Noodes</h4>
        <h4>$ {counta*0+30}</h4>
        <button onClick={()=>handleChange(-1)}>-</button>
        <h4>{counta}</h4>
        <button onClick={()=>handleChange(+1)}>+</button>
      </div>
      <div className='subcont'>
        <h4>Biryani</h4>
        <h4>$ {countb*0+90}</h4>
        <button onClick={()=>handleChangeb(-1)}>-</button>
        <h4>{countb}</h4>
        <button onClick={()=>handleChangeb(+1)}>+</button>
      </div>
      <div className='subcont'>
        <h4>Chips</h4>
        <h4>$ {countc*0+10}</h4>
        <button onClick={()=>handleChangec(-1)}>-</button>
        <h4>{countc}</h4>
        <button onClick={()=>handleChangec(+1)}>+</button>
      </div>
      <h4>total:{counta*30+countb*90+countc*10}</h4>
    </div>
  )
}

export default Counter;
