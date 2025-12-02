// this file is for the image preview screen (immediately before classification result page)
// when user uploads image it will be displayed in this screen
// with "classify Leaf" button 

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { classifyImage } from '../app-utils/classification-screen-utils/ClassifierAction';
import previewstyles from '../app-styles/ImagePreviewStyles';


export default function ImagePreviewScreen({ route, navigation }) {

    const { imageUri } = route.params;

    // state variable to track loading status
    // isLoading - waiting for response from server
    // setLoading - update loading status
    const [isLoading, setIsLoading] = useState(false);

    const handleClassification = async () => {
        setIsLoading(true);
        try {
            // call classifier action to classify image 
            const result = await classifyImage(imageUri);
            if (result) {
                setIsLoading(false);
                // navigate to Result Screen
                navigation.navigate('Result', { result });
            }
        } catch (error) {
            console.error('Error occured whilec lassifying the image:', error);
            setIsLoading(false);
        }
    };

    return (
        <View style={previewstyles.container}>

            {/* header */}
            <View style={previewstyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={previewstyles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={previewstyles.title}> Leaf Preview </Text>
            </View>

            {/* image preview */}
            <View style={previewstyles.imageContainer}>
                <Image source={{ uri: imageUri }} style={previewstyles.image} resizeMode="contain" />
            </View>

            {/* buttons */}
            <View style={previewstyles.buttonContainer}>
                <TouchableOpacity 
                    style={previewstyles.cancelButton}
                    onPress={() => navigation.goBack()}
                    disabled={isLoading}
                >
                    <Text style={previewstyles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[previewstyles.classifyButton, isLoading && previewstyles.classifyButtonDisabled]}
                    onPress={handleClassification}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#cf0a0aff" />
                    ) : (
                        <Text style={previewstyles.classifyButtonText}>Classify Leaf</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}
