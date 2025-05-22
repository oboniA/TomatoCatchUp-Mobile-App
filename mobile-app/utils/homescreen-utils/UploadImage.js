import React from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';


// functionality for Upload from photo Gallery
export const imageUpload = async () => {
    
    const accessPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    // when no permission to access gallery
    if (!accessPermission.granted) {
        Alert.alert('Access Denied!', 'Allow Access to Your Photos.');
        return;
    }
    // TODO: 
    // Assumed that the app already has full access granted. 
    // Recommended to implement the proper functionality that asks permission everytime pressed
    // or sends message to change the device seting.

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
};