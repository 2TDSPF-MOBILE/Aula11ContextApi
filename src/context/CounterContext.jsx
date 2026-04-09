import { createContext,useContext,useState } from "react";


//Criando um contexto vazio
const CounterContext = createContext()

//Criar um Provider(esse provider será responsável por fornecer
// os dados do contexto)
export function CounterProvider({children}){
    //Estado global do contador
    const[count,setCount]=useState(0)

    //Função para incrementar
    function increment(){
        setCount(prev=>prev+1)
    }

    //Função para decrementar
    function decrement(){
        setCount(prev=>prev-1)
    }
    return(
        <CounterContext.Provider value={{count,increment,decrement}}>
            {children}
        </CounterContext.Provider>
    )
}

//Criar um hook personalizado para consumir o contexto
export function useCounter(){
    return useContext(CounterContext)
}