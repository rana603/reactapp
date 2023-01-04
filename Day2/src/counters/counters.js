import React, {useState} from 'react';


function Counter2() {
    const [counta, setCounta] = useState(0);
    const [countb,setCountb]=useState(0);
    const [countc,setCountc]=useState(0);


   
    const handleChange=(value)=>{
      if (counta>0){
        setCounta(counta+value);
    }else{
      setCounta(counta);
    }
  }
    const handleChangeb=(value)=>{
      if (countb>0){
        setCounta(countb+value);
    }else{
      setCounta(countb);
    }
    }
    const handleChangec=(value)=>{
        if (countc>0){
          setCounta(countc+value);
      }else{
        setCounta(countc);
      }
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
