// src/Navigations/AuthNavigation.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';


const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}  options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppNavigation;