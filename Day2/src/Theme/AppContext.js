import React from 'react';
import { useState } from 'react';
export const AppContext = React.createContext();

function AppContextProvider({children}){                //this app context Provoider is working in that way we pass children
                                                        // so that whatever theme in app
    const [state, setState ] = useState("light");

    const toggleTheme = () =>{
        state === "light" ? setState("dark") : setState("light");
    };
return(
        <AppContext.Provider value={[state, toggleTheme]}>
            {children}  
         </AppContext.Provider>
    )
     
}

export default AppContext;
