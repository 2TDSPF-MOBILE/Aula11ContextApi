import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { CounterProvider } from "./src/context/CounterContext";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <CounterProvider>
      <AppNavigator />
    </CounterProvider>
  )
}