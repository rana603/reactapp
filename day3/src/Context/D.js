import React from 'react';
import { useContext } from 'react';
import myContext from './Context';


function D(props) {
    const data=useContext(myContext);
  return (
    <div>
        <h2>D component</h2>
        <dl>
            <dt>Name</dt>
            <dd>{data.name}</dd>
            {/* <dd>{props.info.name}</dd> */}
            <dt>City</dt>
            <dd>{data.city}</dd>
            {/* <dd>{props.info.city}</dd> */}
            <dt>Email</dt>
            <dd>{data.email}</dd>
            {/* <dd>{props.info.email}</dd> */}
        </dl>
    </div>
  )
}

export default D;
