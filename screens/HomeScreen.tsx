import { View, Text, Image, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View
      style={{
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../assets/foto2x2.png")}
        style={{
          width: 100,
          height: 100,
          marginBottom: 10,
          borderRadius: 50,
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Jenry Sanchez</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        jenrydev@@gmail.com
      </Text>

      <View style={{ marginBottom: 10 }}>
        <Button
          title="Ir a Sumadora"
          onPress={() => navigation.navigate("Sumadora")}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button
          title="Ir a Traductor"
          onPress={() => navigation.navigate("Traductor")}
        />
      </View>
      <View>
        <Button
          title="Ir a Tabla"
          onPress={() => navigation.navigate("Tabla")}
        />
      </View>
    </View>
  );
}
