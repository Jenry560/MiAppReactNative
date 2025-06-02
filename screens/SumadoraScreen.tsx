import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function SumadoraScreen() {
  const [a, setA] = useState('0');
  const [b, setB] = useState('0');

  return (
    <View style={{ padding: 20 }}>
      <Text>Suma de dos números</Text>
      <TextInput keyboardType="numeric" onChangeText={setA} value={a} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput keyboardType="numeric" onChangeText={setB} value={b} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Resultado: {parseInt(a) + parseInt(b)}</Text>
    </View>
  );
}
