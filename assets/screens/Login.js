/* eslint-disable prettier/prettier */
import {Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
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
      <View><Text style={Design.or}>OR</Text></View>
      <View style={Design.bottomhalf}>
        <Text style={Design.h2}>User name</Text>
        <TextInput style={Design.input}
        placeholder="User name"
        placeholderTextColor="rgba(130,139,154,0.5)"
        />
         <Text style={Design.h2}>Password</Text>
        <TextInput style={Design.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="rgba(130,139,154,0.5)"
        />
        <TouchableOpacity style={Design.btn} onPress={() => navigation.navigate('Seats')}>
            <Text style={Design.btntxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
