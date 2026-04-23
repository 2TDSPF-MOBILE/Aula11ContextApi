import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { CounterProvider } from "./src/context/CounterContext";
import AppNavigation from "./src/navigation/AppNavigator";
import { ThemeProvider } from "./src/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
        <AppNavigation />
      </CounterProvider>
    </ThemeProvider>

  )
}