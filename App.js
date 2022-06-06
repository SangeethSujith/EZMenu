import React from 'react';
import Login from './assets/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Seats from './assets/screens/Seats';
import Bookfood from './assets/screens/Bookfood';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
