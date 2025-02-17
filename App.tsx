/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AllStack from './src/Navigations/AllStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AllStack />
    </NavigationContainer>
  );
}

export default App;
