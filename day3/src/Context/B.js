import React from 'react'
import C from './C';

function B(props) {
  return (
    <div>
      <h2>B component</h2>
      {/* <p >Name: {props.data.name}</p> */}
      {/* <C data={props.data}/> */}
      <C/>
    </div>
  )
}

export default B;
