import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartupScreen from './app-screens/StartupScreen';
import HomeScreen from './app-screens/HomeScreen';
import ImagePreviewScreen from './app-screens/ImagePreviewScreen';
import ClassificationResultScreen from './app-screens/ClassificationResultScreen';
import { LangProvider } from './app-utils/multi-language-utils/LanguageProvider';
import SelectLanguageScreen from './app-screens/SelectLanguageScreen';


const NavStack = createNativeStackNavigator();

export default function App() {
  return (
    <LangProvider>
            <NavigationContainer>
                <NavStack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName="Splash"
                >
                    <NavStack.Screen name="Splash" component={StartupScreen} />
                    <NavStack.Screen name="SelectLanguage" component={SelectLanguageScreen} />
                    <NavStack.Screen name="Home" component={HomeScreen} />
                    <NavStack.Screen name="Preview" component={ImagePreviewScreen} />
                    <NavStack.Screen name="Result" component={ClassificationResultScreen} />
                </NavStack.Navigator>
            </NavigationContainer>
        </LangProvider>
  );
}

// CHANGED:
// Wrapped the entire App() in LangProvider.
// Allows multi-language functionality to provide language context throughout the app.

