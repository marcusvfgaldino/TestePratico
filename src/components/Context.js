import { createContext } from "react";

const Context = createContext ({
    token: null,
    user: null,
    setToken: () => {},
})

export default Context;