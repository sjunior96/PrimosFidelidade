import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Swiper from 'react-native-swiper';

export default function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ height: '100%', width: '100%', backgroundColor: '#000' }}>
      <View style={{ height: '30%', width: '100%', backgroundColor: '#000', alignItems: "center", marginTop: '10%' }}>
        <Image source={require('./src/assets/primos.png')} style={{ resizeMode: "contain", height: '100%' }}></Image>
      </View>
      <View style={{ height: 600, width: '100%', backgroundColor: '#000', alignItems: "center", justifyContent: "center" }}>
        <Swiper 
        style={{ marginLeft: '5%' }} 
        //showsButtons={true} 
        //nextButton={<Text style={{ color: '#00F', left: -20 }}>{">>"}</Text>} 
        //prevButton={<Text style={{ color: '#00F', left: 20 }}>{"<<"}</Text>}
        showsPagination={true}
        paginationStyle={{
          top: 200
        }}
        activeDotColor={'#000'}
        >
          {/* SLIDE 1 - Login */}
          <View style={{ height: '70%', width: '90%', backgroundColor: '#FFF', borderRadius: 25, alignItems: "center" }}>
            <Text style={{ height: '10%', fontSize: 25, textAlignVertical: "center", marginBottom: '10%', marginTop: '10%' }}>Login</Text>
            <TextInput placeholder="Email" style={{ width: '80%', height: 50, borderWidth: 1, borderRadius: 5, marginBottom: '5%' }}></TextInput>
            <TextInput placeholder="Senha" style={{ width: '80%', height: 50, borderWidth: 1, borderRadius: 5, marginBottom: '5%' }}></TextInput>
            <TouchableOpacity style={{ height: 50, width: '50%', backgroundColor: '#000', borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: '#FFF' }}>Login</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 50 }}>Desenvolvido pela SeniorTech</Text>
          </View>

          {/* SLIDE 2 - Registro */}
          <View style={{ height: '70%', width: '90%', backgroundColor: '#FFF', borderRadius: 25, alignItems: "center" }}>
            <Text style={{ height: '10%', fontSize: 25, textAlignVertical: "center", marginBottom: '10%', marginTop: '10%' }}>Registrar-se</Text>
            <TextInput placeholder="Email" style={{ width: '80%', height: 50, borderWidth: 1, borderRadius: 5, marginBottom: '5%' }}></TextInput>
            <TextInput placeholder="Senha" style={{ width: '80%', height: 50, borderWidth: 1, borderRadius: 5, marginBottom: '5%' }}></TextInput>
            <TouchableOpacity style={{ height: 50, width: '50%', backgroundColor: '#000', borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: '#FFF' }}>Registrar</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 50 }}>Desenvolvido pela SeniorTech</Text>
          </View>

          {/* SLIDE 3 - Recuperação de senha */}
          <View style={{ height: '70%', width: '90%', backgroundColor: '#FFF', borderRadius: 25, alignItems: "center" }}>
            <Text style={{ height: '10%', fontSize: 25, textAlignVertical: "center", marginBottom: '20%', marginTop: '10%' }}>Recuperar senha</Text>
            <TextInput placeholder="Email" style={{ width: '80%', height: 50, borderWidth: 1, borderRadius: 5, marginBottom: '5%' }}></TextInput>
            <TouchableOpacity style={{ height: 50, width: '50%', backgroundColor: '#000', borderRadius: 25, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: '#FFF' }}>Enviar email</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 50 }}>Desenvolvido pela SeniorTech</Text>
          </View>
        </Swiper>

      </View>
    </KeyboardAvoidingView>
  );
}