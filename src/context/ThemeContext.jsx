import { createContext,useContext,useState } from "react";

const ThemeContext = createContext()//Cria o contexto vazio

export const ThemeProvider = ({children})=>{
    const[theme,setTheme]=useState("light")

    const alterarTema = () =>{
        setTheme((prev)=>(prev==="light"?"dark":"light"))
    }

    const light = {
        bg:"#e08a8a",
        text:"#1a1515"
    }

    const dark={
        bg:"#274c0a",
        text:"#fff"
    }

    return(
        <ThemeContext.Provider value={{theme,alterarTema,light,dark}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = ()=>{
    return useContext(ThemeContext)
}