import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import homestyles from '../app-styles/HomeStyles';


export default function HomeScreen() {

    // functionality for Upload from photo Gallery
    const imageUpload = async () => {
        const accessPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        // when no permission to access gallery
        if (!accessPermission.granted) {
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
            console.log('Image URI: ', selectedImage.uri);
        }
    };


    // Page Layout
    return (

        // home page background
        <View style={ homestyles.container } >
            
            {/* page logo */}
            <View style={ homestyles.header } >
                <Image source={require('../assets/logo.png')} style={ homestyles.homeLogo } />
                <Text style={ homestyles.logoText }> TomatoCatchUp </Text>
            </View>

            {/* page title */}
            <Text style={ homestyles.title } > Tomato Leaf Disease Detector </Text>
            
            {/* photo buttons */}
            <View style={ homestyles.buttonRow }>

                {/* Upload from Folder */}
                <TouchableOpacity style={ homestyles.iconButton } onPress={ imageUpload } >
                    <Image 
                        source={require('../assets/folderimage.png')} 
                        style={ homestyles.icon } 
                        resizeMode="contain"
                    />
                    <Text style={ homestyles.iconLabel } > Upload Leaf Image </Text>
                </TouchableOpacity>

                {/* Camera Upload */}
                <TouchableOpacity style={ homestyles.iconButton } >
                    <Image 
                        source={require('../assets/cameraimage.png')} 
                        style={ homestyles.icon } 
                        resizeMode="contain"
                    />
                    <Text style={ homestyles.iconLabel } > Capture Leaf Image </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}