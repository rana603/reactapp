import { useState } from 'react';
import './App.css';
import Auth from './Auth';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { loginContext } from './Context/Context';

function App() {
  const[ state,setState]=useState({
    isLoggedIn:false,
    user:"Guest User",
  })
  const fnLoggedIn = (data) => {
    setState(data);
  };

  const fnLoggedOut = () => {
    setState({
      isLoggedIn: false,
      user: "Guest User",
    });
  };
  return (
    <div>   
      <loginContext.Provider value={{state, fnLoggedIn,fnLoggedOut}}>
      <Header/>
      <Auth/>
      </loginContext.Provider>
      
      <div >
        {/* <Home/> */}
      {/* <A/> */}
      {/* <Login/> */}
      </div>
      
    </div>
  );
}

export default App;
