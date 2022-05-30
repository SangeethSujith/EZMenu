/* eslint-disable prettier/prettier */
import {Text, View, StatusBar, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import Design from '../styles/Design';
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={Design.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'transparent'}
      />
      <View style={Design.tophalf}>
        <Text style={Design.h1}>Sign In</Text>
        <Text style={Design.h2}>Enter your quick access pin</Text>
        <TextInput
          style={Design.input}
          placeholder="* * * *"
          keyboardType="numeric"
          placeholderTextColor="rgba(130,139,154,0.5)"
        />
      </View>
      <View style={Design.bottomhalf}>
        <Text style={Design.or}>OR</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
