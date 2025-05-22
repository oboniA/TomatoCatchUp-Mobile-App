import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';


export const imageAction = async (action) => {

    let actionPermission;

    if ( action == 'gallery') {
        actionPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        // when no permission to access gallery
        if (!actionPermission.granted) {
            Alert.alert('Access Denied!', 'Allow Access to Your Photos.');
            return;
        }

        // when permission granted to access gallery
        const accessPhotoes = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
    
        // when user selects an image
        if (!accessPhotoes.canceled) {
            const selectedImage = accessPhotoes.assets[0]  // picks first image
            Alert.alert('Image Selected', selectedImage.uri);
            return selectedImage;
        }
    }

    if ( action == 'camera') {
        actionPermission = await ImagePicker.requestCameraPermissionsAsync();
        
        // when no permission to access camera
        if (!actionPermission.granted) {
            Alert.alert('Camera Access Denied!', 'Allow Access to Your Camera.');
            return;
        }
        
        // when permission granted to access camera
        const accessCamera = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
        });
    
        // when user captures an image
        if (!cameraCapture.canceled) {
            const capturedImage = accessCamera.assets[0]  // picks first image
            Alert.alert('Image Selected', capturedImage.uri);
            return capturedImage;
        }
    } 
};

// TODO: 
// Assumed that the app already has full access granted. 
// Recommended to implement the proper functionality that asks permission everytime pressed
// or sends message to change the device seting.