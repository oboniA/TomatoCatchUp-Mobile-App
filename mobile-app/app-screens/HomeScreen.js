import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { imageUpload } from '../utils/homescreen-utils/UploadImage';
import { imageCapture } from '../utils/homescreen-utils/CaptureImage';
import homestyles from '../app-styles/HomeStyles';


export default function HomeScreen() {

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
                <TouchableOpacity style={ homestyles.iconButton } onPress={ imageCapture } >
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