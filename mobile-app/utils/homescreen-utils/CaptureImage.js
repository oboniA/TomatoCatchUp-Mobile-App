import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';


// functionality for Accessing Device Camera
export const imageCapture = async () => {
    
    const accessPermission = await ImagePicker.requestCameraPermissionsAsync();

    // when no permission to access gallery
    if (!accessPermission.granted) {
        Alert.alert('Camera Access Denied!', 'Allow Access to Your Camera.');
        return;
    }
    // TODO: 
    // Assumed that the app already has full access granted. 
    // Recommended to implement the proper functionality that asks permission everytime pressed
    // or sends message to change the device seting.

    // when permission granted to access camera
    const accessCamera = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
    });

    // when user selects an image
    if (!cameraCapture.canceled) {
        const capturedImage = accessCamera.assets[0]  // picks first image
        Alert.alert('Image Selected', capturedImage.uri);
        return capturedImage;
    }
};