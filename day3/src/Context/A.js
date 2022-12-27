import React, { useState } from 'react';
import myContext from "./Context";
import B from './B';

function A(props) {
    const[state,setState]=useState(
        {name:"chris",
        city:"sydney",
        email:"chris@gmail.com"
    }
    );
  return (
    <div>
      <h2>A component</h2>
      <button onClick={()=>{
        setState({
            name:"raj",
            city:"delhi",
            email:"raj@gmail.com"
        });

      }}>update</button>
      <myContext.Provider value={state}>
        <B  />
      </myContext.Provider>
      {/* <B data={state}/> */}
    </div>
  ) 
}

export default A;
