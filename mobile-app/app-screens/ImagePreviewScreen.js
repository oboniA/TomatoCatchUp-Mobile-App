// this file is for the image preview screen (immediately before classification result page)
// Addition of Loading bar animation

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Animated } from 'react-native';
import { classifyImage } from '../app-utils/classification-screen-utils/ClassifierAction';
import previewstyles from '../app-styles/ImagePreviewStyles';
import { useLanguage } from '../app-utils/multi-language-utils/LanguageProvider';

export default function ImagePreviewScreen({ route, navigation }) {
    // translation function
    const { t } = useLanguage();
    // get image URI from navigation params
    const { imageUri } = route.params;
    // state variable to track loading status
    const [isLoading, setIsLoading] = useState(false);
    // Loading Bar animation
    const [showLoadingBar, setShowLoadingBar] = useState(false);
    // animation setup
    const progressAnimation = React.useRef(new Animated.Value(0)).current;
    // animation duration
    const animeTimeout = React.useRef(null);


    // animation sequence 
    useEffect(() => {
        if (isLoading) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(progressAnimation, {
                        toValue: 1,
                        duration: 2000,  // 0 → 1 over 2000ms
                        useNativeDriver: false,
                    }),
                    Animated.timing(progressAnimation, {
                        toValue: 0,
                        duration: 500,  // 1 → 0 over 500ms
                        useNativeDriver: false,
                    }),
                ])
            ).start();
        } else {
            progressAnimation.setValue(0);
        }
    }, [isLoading]);

    // controls if loading bar visible.
    useEffect(() => {
        if (isLoading) {
            animeTimeout.current = setTimeout(() => {
                setShowLoadingBar(true);
            }, 600);  // bar appears after 600ms
        } else {
            if (animeTimeout.current) {
                clearTimeout(animeTimeout.current);
            }
            setShowLoadingBar(false);
        }
        // cleanup function
        return () => {
            if (animeTimeout.current) {
                clearTimeout(animeTimeout.current);
            }
        };
    }, [isLoading]);

    // calculate width of progress bar based on animation value
    const loadProgressWidth = progressAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['10%', '90%'],
    });


    // function to handle leaf classification
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

    // interface rendering
    return (
        <View style={previewstyles.container}>

            {/* header */}
            <View style={previewstyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={previewstyles.backButton}>←</Text>
                </TouchableOpacity>
                <Text style={previewstyles.title}> {t('leaf_preview')} </Text>
            </View>

            {/* image preview */}
            <View style={previewstyles.imageContainer}>
                <Image source={{ uri: imageUri }} style={previewstyles.image} resizeMode="contain" />
            </View>

            {/* loading indicator */}
            {/* only shows if request takes longer than 600ms */}
            {showLoadingBar && (
                <View style={previewstyles.loadingBarSection}>
                    <ActivityIndicator size="small" color="#ea0505ff" />
                    <Text style={previewstyles.analyzingText}> {t('analyzing_leaf')}</Text>
                    
                    <View style={previewstyles.progressBarContainer}>
                        <Animated.View 
                            style={[
                                previewstyles.progressBar,
                                { width: loadProgressWidth }
                            ]}
                        />
                    </View>
                </View>
            )}

            {/* buttons */}
            <View style={previewstyles.buttonContainer}>
                <TouchableOpacity 
                    style={previewstyles.cancelButton}
                    onPress={() => navigation.goBack()}
                    disabled={isLoading}
                >
                    <Text style={previewstyles.cancelButtonText}>{t('cancel')}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[previewstyles.classifyButton, isLoading && previewstyles.classifyButtonDisabled]}
                    onPress={handleClassification}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#cf0a0aff" />
                    ) : (
                        <Text style={previewstyles.classifyButtonText}>{t('classify_leaf')}</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}


// CHANGES:
// changed previewstyles labels from texts to translation dictionary keys using {t('key')}

// TODO:
// Create Loading Animation as a seperate function.
// Refractor Loading Animation in a seperate file as a Custom Hook. 