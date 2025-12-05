import React, { useRef, useEffect } from 'react';
import { View, Image, Animated, Text} from 'react-native';
import StartupStyles from '../app-styles/StartupStyles';
import { useNavigation } from '@react-navigation/native';

export default function StartupScreen() {
  
    // fading animation
    const fadeAnimation = useRef(new Animated.Value(0)).current; // animation starts at 0
    const fadeText = useRef(new Animated.Value(0)).current;
    const nav = useNavigation();

    useEffect(() => {
      
      // logo animation
      Animated.timing(fadeAnimation, {
        toValue: 1, // opacity from 0 to 1 (fully visible)
        duration: 2000, // animate for 2 sec
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          // text animation
          Animated.timing(fadeText, {
            toValue: 1,
            duration: 1500, // animate for 1.5 sec
            useNativeDriver: true,
          }).start();  
        }, 500); // 0.5 sec delay after logo
      });

    // navigate to Home after 4 second
    const switchToHomeScreen = setTimeout(() => {
      nav.replace('SelectLanguage');
    }, 5000);

     return () => {
      clearTimeout(fadeText);
      clearTimeout(switchToHomeScreen);
    };
      
    }, []);

  return (
    <View style={StartupStyles.container}>
      {/* Logo */}
      <Animated.Image
         source={require('../assets/logo.png')}
         style={[StartupStyles.logo, { opacity: fadeAnimation }]}
         resizeMode="contain"
      />

      {/* text after delay*/}
      <Animated.Text style={[StartupStyles.text, { opacity: fadeText }]}>
        TomatoCatchUp
      </Animated.Text>

    </View>
  );
}
