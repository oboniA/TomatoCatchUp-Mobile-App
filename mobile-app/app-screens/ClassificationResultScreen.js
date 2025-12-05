import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import resultstyles from '../app-styles/ClassificationResultStyles';
import { useLanguage } from '../app-utils/multi-language-utils/LanguageProvider';

export default function ResultScreen({ route, navigation }) {
    const { t } = useLanguage();
    const { result } = route.params;
    const diseaseName = result.prediction;

    // function to open a link in the browser
    const handleReadMore = () => {
        if (result.read_more) {
            Linking.openURL(result.read_more).catch(err => console.error('Error opening URL:', err));
        }
    };
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
                    <Text style={resultstyles.cardText}>{result.description}</Text>
                </View>

                <View style={resultstyles.detailsCard}>
                    <Text style={resultstyles.cardTitle}>{t('symptoms')}</Text>
                    <Text style={resultstyles.cardText}>{result.symptoms}</Text>
                </View>

                {result.treatment !== 'N/A' && (
                    <View style={resultstyles.detailsCard}>
                        <Text style={resultstyles.cardTitle}>{t('treatment')}</Text>
                        <Text style={resultstyles.cardText}>{result.treatment}</Text>
                    </View>
                )}

                {result.prevention !== 'N/A' && (
                    <View style={resultstyles.detailsCard}>
                        <Text style={resultstyles.cardTitle}>{t('prevention')}</Text>
                        <Text style={resultstyles.cardText}>{result.prevention}</Text>
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
// changed resultstyle labels from texts to translation dictionary keys using {t('key')}