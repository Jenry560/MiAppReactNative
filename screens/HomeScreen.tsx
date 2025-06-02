import { View, Text, Image, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require("../assets/foto2x2.png")}
        style={{ width: 100, height: 100, marginBottom: 10 }}
      />
      <Text>Nombre: Jenry</Text>
      <Text>Apellido: Sanchez</Text>
      <Text>Email: jenrydev@@gmail.com</Text>

      <Button
        title="Ir a Sumadora"
        onPress={() => navigation.navigate("Sumadora")}
      />
      <Button
        title="Ir a Traductor"
        onPress={() => navigation.navigate("Traductor")}
      />
      <Button title="Ir a Tabla" onPress={() => navigation.navigate("Tabla")} />
    </View>
  );
}
