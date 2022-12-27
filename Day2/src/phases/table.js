import React from 'react'
import './phase.css';

function Table() {
  var tableStyle={
    width:"500px",
    margin:" 50px auto"
  }
  return (
    <div>
      <table style={tableStyle} border="2">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>c1</td>
            <td>sitarganj</td>
          </tr>
          <tr>
            <td>101</td>
            <td>c1</td>
            <td>sitarganj</td>
          </tr>
          <tr>
            <td>101</td>
            <td>c1</td>
            <td>sitarganj</td>
          </tr>
          <tr>
            <td>101</td>
            <td>c1</td>
            <td>sitarganj</td>
          </tr>
          <tr>
            <td>101</td>
            <td>c1</td>
            <td>sitarganj</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;
