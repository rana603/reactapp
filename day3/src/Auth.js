import React from "react";
import Login from "./Login";
import { useContext  } from "react";
import { loginContext } from "./Context/Context";
import Home from "./Home";


function Auth(props) {
  const {state} = useContext(loginContext);
//   let isLoggedIn = false;
  return <div>{state.isLoggedIn ? <Home/> : <Login/>}</div>;
}  

export default Auth;
