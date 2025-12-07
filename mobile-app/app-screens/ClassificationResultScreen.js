// import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';  // ActivityIndicator
import resultstyles from '../app-styles/ClassificationResultStyles';
import { useLanguage } from '../app-utils/multi-language-utils/LanguageProvider';


export default function ResultScreen({ route, navigation }) {
    // 'en' or 'bn' based on user selection
    const { t, language } = useLanguage();
    const { result } = route.params;
    const diseaseName = result.prediction;


    // helper function to pick the correct language field
    // try to find a matching field in database (MongoDB) for selected language (bn or en)
    // if not found, fall back to English
    // if still not found, return empty string
    const getLanguageField = (field) => {
        return result[field]?.[language] || result[field]?.['en'] || '';
    };


    // function to open :read_more" link in the browser
    const handleReadMore = () => {
        if (result.read_more) {
            Linking.openURL(result.read_more).catch(err => console.error('Error opening URL:', err));
        }
    };


    // interface rendering
    return (
        <View style={resultstyles.container}>

            {/* header */}
            <View style={resultstyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={resultstyles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={resultstyles.title}>{t('analysis_result')}</Text>
            </View>

            {/* main Content */}
            <ScrollView showsVerticalScrollIndicator={false}>
                
                {/* status */}
                <View style={resultstyles.statusContainer}>
                    <Text style={resultstyles.statusLabel}> {t('leaf_health_status')} </Text>
                    <Text style={resultstyles.statusValue}>
                        {diseaseName.replace('Tomato_', '').replace(/__/g, ' ')}
                    </Text>
                </View>

                {/* disease details */}
                <View style={resultstyles.detailsCard}>
                    <Text style={resultstyles.cardTitle}>{t('description')}</Text>
                    <Text style={resultstyles.cardText}>{getLanguageField('description')}</Text>
                </View>

                <View style={resultstyles.detailsCard}>
                    <Text style={resultstyles.cardTitle}>{t('symptoms')}</Text>
                    <Text style={resultstyles.cardText}>{getLanguageField('symptoms')}</Text>
                </View>

                {result.prevention !== 'N/A' && (
                    <View style={resultstyles.detailsCard}>
                        <Text style={resultstyles.cardTitle}>{t('prevention')}</Text>
                        <Text style={resultstyles.cardText}>{getLanguageField('prevention')}</Text>
                    </View>
                )}

                {result.treatment !== 'N/A' && (
                    <View style={resultstyles.detailsCard}>
                        <Text style={resultstyles.cardTitle}>{t('treatment')}</Text>
                        <Text style={resultstyles.cardText}>{getLanguageField('treatment')}</Text>
                    </View>
                )}

                {result.read_more && (
                    <TouchableOpacity style={resultstyles.readMoreButton} onPress={handleReadMore}>
                        <Text style={resultstyles.readMoreText}>{t('read_more')}</Text>
                    </TouchableOpacity>
                )}

            </ScrollView>

            {/* back to "Homepage" Button */}
            <View style={resultstyles.buttonContainer}>
                <TouchableOpacity 
                    style={resultstyles.backHomeButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={resultstyles.backHomeText}> {t('analyze_another_leaf')} </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


// CHANGES:
// 1. Added getLanguageField helper function to fetch the correct language field from the result object.
// 2. under UI Rendering: used getLanguageField to display description, symptoms, prevention, and treatment in the selected language.
