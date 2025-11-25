import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { galleryPermission } from './ImagePickerPermissions';


export async function imagePickerGallery() {

    const accessPermission = await galleryPermission();
    
    // when no permission to access gallery
    if (!accessPermission) {
        console.log('No permission, not opening gallery');
        return null;
    }

    // when permission granted to access gallery
    console.log('Launching image library');
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
    } else {
        console.log('Image picking canceled');
        return null;
    }
}

// Done: 
// Seperated the Permission and Action functions

// TODO: 
// Implemented only Gallery Access Functionality
// Need to implement Camera Access Functionality
