import { Text, View, Button, StyleSheet } from "react-native"
import { useCounter } from "../context/CounterContext"
import { useTheme } from "../context/ThemeContext"

export default function HomeScreen({ navigation }) {
    //Pegandos os dados do Context
    const { count, increment } = useCounter()

    //Pegando os dados do ThemeProvider
    const{theme,alterarTema,light,dark}=useTheme()

    const styles = getStyles(theme, light, dark)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Valor do Contador:{count}
            </Text>
            <Button
                title="Incrementar"
                onPress={increment}
            />
            <Button
                title="Ir para tela detalhes"
                onPress={() => navigation.navigate("details")}
            />
            <Button 
                title="Alterar Tema"
                onPress={alterarTema}
            />
        </View>
    )
}


const getStyles = (theme, light, dark) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme === "light" ? light.bg : dark.bg,
    },
    text: {
        color: theme === "light" ? light.text : dark.text,
    }
})