import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: '#000', alignItems: "center" }}>
      <View style={{ height: '20%', width: '100%', backgroundColor: '#FFF', alignItems: "center", justifyContent: "center" }}>
        <Text>A IMAGEM VAI AQUI</Text>
      </View>
      <View style={{ height: '50%', width: '90%', backgroundColor: '#FFF', marginTop: '10%', borderRadius: 25, alignItems: "center" }}>
        <Text style={{ height: '15%', fontSize: 20, fontWeight: "bold", marginBottom: '10%' }}>Login</Text>

        <TextInput placeholder="Email" style={{ borderWidth: 1, width: '80%', borderRadius: 5, marginBottom: '5%' }}></TextInput>
        <TextInput placeholder="Senha" style={{ borderWidth: 1, width: '80%', borderRadius: 5 }}></TextInput>

        <TouchableOpacity style={{ height: '15%', width: '30%', backgroundColor: '#000', borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: '#FFF' }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}