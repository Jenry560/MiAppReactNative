import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function TablaScreen() {
  const [num, setNum] = useState("1");

  return (
    <View style={{ padding: 20 }}>
      <Text>Tabla del {num}</Text>
      <TextInput
        keyboardType="numeric"
        value={num}
        onChangeText={setNum}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      {Array.from({ length: 13 }, (_, i) => (
        <Text key={i}>
          {num} × {i + 1} = {parseInt(num) * (i + 1)}
        </Text>
      ))}
    </View>
  );
}
