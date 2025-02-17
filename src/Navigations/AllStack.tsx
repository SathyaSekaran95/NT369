// src/Navigations/AllStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/Splash/SplashScreen';
import AuthNavigation from './AuthNavigation'; // Your existing navigation
import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();

const AllStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="AppNavigation" component={AppNavigation} options={{ headerShown: false }} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default AllStack;