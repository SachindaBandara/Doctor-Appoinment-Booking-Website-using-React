import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = () => {

    const value = {
        doctors
    }

    return (
        <AppContextProvider value = {value}>
            {props.children}
        </AppContextProvider>
    )
}

export default AppContextProvider