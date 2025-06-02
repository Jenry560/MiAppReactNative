import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import numeroALetras from "../utils/utils";

export default function TraductorScreen() {
  const [num, setNum] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Traductor (1–1000)</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={setNum}
        value={num}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Text>En letras: {numeroALetras(parseInt(num))}</Text>
    </View>
  );
}
