import {Text,View,Button} from "react-native"
import { useCounter } from "../context/CounterContext"

export default function HomeScreen(){
    //Pegandos os dados do Context
    const{count,increment}=useCounter()
    return(
        <View style={{marginTop:20}}>
            <Text>Valor do Contador:{count}</Text>
            <Button 
                title="Incrementar"
                onPress={increment}
            />
        </View>
    )
}