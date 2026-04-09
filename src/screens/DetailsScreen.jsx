import {Text,View} from "react-native"
import { useCounter } from "../context/CounterContext"

export default function DetailsScreen(){
    //Pegar dados do contexto
    const{count}=useCounter()
    return(
        <View style={{marginTop:20}}>
            <Text style={{color:"red"}}>Valor atual do Contador:{count}</Text>
        </View>
    )
}