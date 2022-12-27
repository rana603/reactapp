import { useState } from 'react';
import './App.css';
import Counter from './counter/counter';
import Card from './phases/card';
import Table from './phases/table';
import Counters from './counters/counters';
import TitleCounter from './counter/TitleCounter';
import Timer from './Timer/Timer';
import Timer2 from './Timer/Timer2';
import Timer3 from './Timer/Timer3';
import Theme from './Theme/Theme';
function App() {
  const [state, setState] = useState(true)
  return (
    <div>
      {/* <Counter/> */}
      {/* <TitleCounter/> */}
      {/* <Timer/>
      <Timer2/>
      <Timer3/> */}
      <Theme/>
      {/* {state ? <Card /> : <Table />}

      <div style={{ textAlign: "center" }}>
        <button onClick={() => {
          setState(true)
        }}>Show Card</button>
        <button onClick={() => {
          setState(false)
        }}>Show Table</button>
      </div> */}
      {/* <Counters/> */}
    </div>


  );
}

export default App;
