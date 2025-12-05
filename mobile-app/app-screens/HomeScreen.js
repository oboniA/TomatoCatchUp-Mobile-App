import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { imageAction } from '../app-utils/homescreen-utils/ImagePickers';
import homestyles from '../app-styles/HomeStyles';
import { useLanguage } from '../app-utils/multi-language-utils/LanguageProvider';


export default function HomeScreen({ navigation }) {
    
    // translation function
    const { t } = useLanguage();

    // interface rendering
    return (
        // home page background
        <View style={ homestyles.container } >
            
            {/* page logo */}
            <View style={ homestyles.header } >
                <Image source={require('../assets/logo.png')} style={ homestyles.homeLogo } />
                <Text style={ homestyles.logoText }> {t('app_name')} </Text>
            </View>

            {/* page title */}
            <Text style={ homestyles.title } > {t('tomato_leaf_disease_detector')} </Text>
            
            {/* photo buttons */}
            <View style={ homestyles.buttonRow }>

                {/* Upload from Folder */}
                <TouchableOpacity style={ homestyles.iconButton } onPress={() => imageAction('gallery', navigation)} >
                    <Image 
                        source={require('../assets/folderimage.png')} 
                        style={ homestyles.icon } 
                        resizeMode="contain"
                    />
                    <Text style={ homestyles.iconLabel } > {t('upload_leaf_image')} </Text>
                </TouchableOpacity>

                {/* Camera Upload */}
                <TouchableOpacity style={ homestyles.iconButton } onPress={() => imageAction('camera', navigation)} >
                    <Image 
                        source={require('../assets/cameraimage.png')} 
                        style={ homestyles.icon } 
                        resizeMode="contain"
                    />
                    <Text style={ homestyles.iconLabel } > {t('capture_leaf_image')} </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


// CHANGES:
// changed homestyles labels from texts to translation dictionary keys using {t('key')}
