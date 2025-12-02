import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import resultstyles from '../app-styles/ClassificationResultStyles';

export default function ResultScreen({ route, navigation }) {

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
                <Text style={resultstyles.title}>Analysis Result</Text>
            </View>

            {/* main Content */}
            <ScrollView showsVerticalScrollIndicator={false}>
                
                {/* status */}
                <View style={resultstyles.statusContainer}>
                    <Text style={resultstyles.statusLabel}> Leaf Health Status </Text>
                    <Text style={resultstyles.statusValue}>
                        {diseaseName.replace('Tomato_', '').replace(/__/g, ' ')}
                    </Text>
                </View>

                {/* disease details */}
                <View style={resultstyles.detailsCard}>
                    <Text style={resultstyles.cardTitle}>Description</Text>
                    <Text style={resultstyles.cardText}>{result.description}</Text>
                </View>

                <View style={resultstyles.detailsCard}>
                    <Text style={resultstyles.cardTitle}>Symptoms</Text>
                    <Text style={resultstyles.cardText}>{result.symptoms}</Text>
                </View>

                {result.treatment !== 'N/A' && (
                    <View style={resultstyles.detailsCard}>
                        <Text style={resultstyles.cardTitle}>Treatment</Text>
                        <Text style={resultstyles.cardText}>{result.treatment}</Text>
                    </View>
                )}

                {result.prevention !== 'N/A' && (
                    <View style={resultstyles.detailsCard}>
                        <Text style={resultstyles.cardTitle}>Prevention</Text>
                        <Text style={resultstyles.cardText}>{result.prevention}</Text>
                    </View>
                )}

                {result.read_more && (
                    <TouchableOpacity style={resultstyles.readMoreButton} onPress={handleReadMore}>
                        <Text style={resultstyles.readMoreText}>Read More →</Text>
                    </TouchableOpacity>
                )}

            </ScrollView>

            {/* back to "Homepage" Button */}
            <View style={resultstyles.buttonContainer}>
                <TouchableOpacity 
                    style={resultstyles.backHomeButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={resultstyles.backHomeText}> Analyze Another Leaf </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}