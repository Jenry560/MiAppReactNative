import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SumadoraScreen from "./screens/SumadoraScreen";
import TablaScreen from "./screens/TraductorScreen";
import TraductorScreen from "./screens/TablaScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Sumadora" component={SumadoraScreen} />
        <Stack.Screen name="Traductor" component={TraductorScreen} />
        <Stack.Screen name="Tabla" component={TablaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
