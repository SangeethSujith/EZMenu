/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Design from '../styles/Design';
const Login = ({ navigation }) => {
    const [visible, setvisible] = useState(true);
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
                <View style={Design.inputv}>
                    <TextInput style={Design.inpute}
                        placeholder="User name"
                        placeholderTextColor="rgba(130,139,154,0.5)"
                    />
                    <Image source={require('../images/tick.png')} />
                </View>
                <Text style={Design.h2}>Password</Text>
                <View style={Design.inputv}>
                    <TextInput style={Design.inpute}
                        placeholder="* * * * * * * *"
                        secureTextEntry={visible}
                        placeholderTextColor="rgba(130,139,154,0.5)"
                    />
                    <TouchableOpacity onPress={() => (
                        setvisible(prev => !prev)
                    )}>
                        <Image source={require('../images/eye.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Design.btn} onPress={() => navigation.navigate('Seats')}>
                    <Text style={Design.white}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:'center',paddingTop:10}} onPress={()=>navigation.navigate('Waiter1')}>
                <Text style={Design.black}>Waiter Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login;
