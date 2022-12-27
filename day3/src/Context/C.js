import React from 'react'
import D from './D';

function C(props) {
  return (
    <div>
      <h2>C component</h2>
      {/* <p>{props.data.city}</p> */}
      {/* <D info={props.data}/> */}
      <D/>
    </div> 
  )
}

export default C;
