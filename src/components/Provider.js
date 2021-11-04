import React from "react";
import Context from "./Context";
import UseStorage from "./UseStorage";

const Provider = ({ children }) => {
    const [token, setToken] = UseStorage("token");
    
    return (
        <Context.Provider value={{token, setToken}}>
            {children}
        </Context.Provider>
    );
}

export default Provider