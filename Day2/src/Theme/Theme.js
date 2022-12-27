import React from 'react';
import style from './theme.module.css';
import {AppContext} from "./AppContext"
import { useContext } from 'react';


function Theme({text, onClick}) {
    const [theme, toggleTheme] = useContext(AppContext);
  return (
  <div className="App">
    "hello app"
    <button
        className={`${style.buttonBase} ${theme === "light" ? style.buttonLight : style.buttonDark}`}
        
        >{text}</button>
    <br/>
    <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Theme;
