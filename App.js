/* eslint-disable prettier/prettier */
import React from 'react';
import Login from './assets/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Seats from './assets/screens/Seats';
import Bookfood from './assets/screens/Bookfood';
import Customer from './assets/screens/Customer';
import Orderdetails from './assets/screens/Orderdetails';
import Waiter1 from './assets/screens/Waiter1';

const Stack = createNativeStackNavigator();
//this is a test
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Seats"
          component={Seats}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bookfood"
          component={Bookfood}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Customer"
          component={Customer}
          options={{
            headerShown: true,
            title: 'Customer Details',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'poppinsmedium', fontSize: 20},
          }}
        />
        <Stack.Screen
          name="Orderdetails"
          component={Orderdetails}
          options={{
            headerShown: true,
            title: 'Order Details',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontFamily: 'poppinsmedium', fontSize: 20},
          }}
        />
        <Stack.Screen
          name="Waiter1"
          component={Waiter1}
          options={{headerShown: true,
          title: 'Table',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: 'poppinsmedium', fontSize: 20}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
