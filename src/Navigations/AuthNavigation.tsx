
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Auth/LoginScreen';
import Registration from '../Screens/Auth/RegistrationScreen';
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
       {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/> */}
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
