import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartupScreen from './app-screens/StartupScreen';
import HomeScreen from './app-screens/HomeScreen';
import ImagePreviewScreen from './app-screens/ImagePreviewScreen';
import ClassificationResultScreen from './app-screens/ClassificationResultScreen';


const NavStack = createNativeStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>

      <NavStack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <NavStack.Screen name="Splash" component={StartupScreen} />
        <NavStack.Screen name="Home" component={HomeScreen} />
        <NavStack.Screen name="Preview" component={ImagePreviewScreen} />
        <NavStack.Screen name="Result" component={ClassificationResultScreen} />
      </NavStack.Navigator>

    </NavigationContainer>

  );
}

