import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import homestyles from '../app-styles/HomeStyles';


export default function HomeScreen() {

    // Page Layout
    return (

        // home page background
        <View style={ homestyles.container } >

            {/* page title */}
            <Text style={ homestyles.title } > Tomato Leaf Disease Detector </Text>
            
            {/* photo buttons */}
            <View style={ homestyles.buttonRow }>

                {/* Upload from Folder */}
                <TouchableOpacity style={ homestyles.iconButton } >
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