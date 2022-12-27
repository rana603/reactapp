import React, {useState} from 'react';


function Counter2() {
    const [counta, setCounta] = useState(0);
    const [countb,setCountb]=useState(0);
    const [countc,setCountc]=useState(0);


   
    const handleChange=(value)=>{
        setCounta(counta+value);
    }
    const handleChangeb=(value)=>{
        setCountb(countb+value);
    }
    const handleChangec=(value)=>{
        setCountc(countc+value);
    }
  return (
    <div className='cnt'>
    
        
      <div className='subcount'>
        <h4>Nudeles</h4>
        <h4>$</h4>
        <button  onClick={()=>handleChange(-1)}>-</button>
        <h4>g</h4>
        <button>+</button>
      </div>
      <div className='subcount'>
        <h4>Biryani</h4>
        <h4>${countb*30}</h4>
        <button onClick={()=>handleChangeb(-1)}>-</button>
        <h4>{countb}</h4>
        <button onClick={()=> handleChangeb(+1)}>+</button>
      </div>
      <div className='subcount'>
        <h4>chips</h4>
        <h4>${countc*30}</h4>
        <button onClick={()=>handleChangec(-1)}>-</button>
        <h4>{countc}</h4>
        <button onClick={()=> handleChangec(+1)}>+</button>
      </div> 
      <h4>Total {counta+countb+countc}</h4>
    </div>
  )
}

export default Counter2;
