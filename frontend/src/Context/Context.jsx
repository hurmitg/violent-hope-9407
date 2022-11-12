import { createContext } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext=createContext()

export const ContextProvider=({children})=>{
    let token=localStorage.getItem("token")
    const nav=useNavigate()
    return (
        <AppContext.Provider value={{token,nav}}>
           {children}
        </AppContext.Provider>
    )
}