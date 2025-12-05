import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../app-utils/multi-language-utils/LanguageProvider';
import langstyles from '../app-styles/SelectLanguageStyles';

export default function SelectLanguageScreen() {
    const { setLanguage } = useLanguage();
    const nav = useNavigation();

    // language handle action
    const handleLanguageSelection = (lang) => {
        // set the selected language 
        setLanguage(lang);
        // navigate to Home screen
        nav.replace('Home');
    };


    // interface rendering
    return (
        <View style={langstyles.container}>
            <Text style={langstyles.title}> Select Language </Text>

            {/* for English (United Kingdom) */}
            <TouchableOpacity
                style={langstyles.englishButton}
                onPress={() => handleLanguageSelection('en')}
            >
                <Text style={langstyles.buttonText}> English 🇬🇧 </Text>
            </TouchableOpacity>
            
            {/* for Bangla (Bangladesh) */}
            <TouchableOpacity
                style={langstyles.bengaliButton}
                onPress={() => handleLanguageSelection('bn')}
            >
                <Text style={langstyles.buttonText}> বাংলা 🇧🇩 </Text>
            </TouchableOpacity>
        </View>
    );
}