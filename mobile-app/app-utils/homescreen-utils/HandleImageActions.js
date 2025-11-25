import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { galleryPermission, cameraPermission } from './ImagePickerPermissions';
import { SUCCESS_MESSAGES, ERROR_MESSAGES, CANCELL_MESSAGES } from './ImagePickerConstants';


// Gallery Access Functionality
export async function imagePickerGallery() {

    const accessPermission = await galleryPermission();
    
    // when no permission to access gallery
    if (!accessPermission) {
        console.log(ERROR_MESSAGES.GALLERY_PERMISSION_DENIED);
        return null;
    }

    // when permission granted to access gallery
    console.log('Launching image library...');
    const accessPhotoes = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
    });

    // when user selects an image
    if (!accessPhotoes.canceled) {
        const selectedImage = accessPhotoes.assets[0]  // picks first image
        Alert.alert(SUCCESS_MESSAGES.IMAGE_PICKED, selectedImage.uri);
        return selectedImage;
    } else {
        console.log(CANCELL_MESSAGES.IMAGE_CANCELLED);
        return null;
    }
}

// Camera Access Functionality
export const imagePickerCamera = async() => {

    const accessPermission = await cameraPermission();
            
    // when no permission to access camera
    if (!accessPermission) {
        console.log(ERROR_MESSAGES.CAMERA_PERMISSION_DENIED);
        return null;
    }
    
    // when permission granted to access camera
    console.log('Launching  Camera...');
    const accessCamera = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
    });

    // when user captures an image
    if (!cameraCapture.canceled) {
        const capturedImage = accessCamera.assets[0]  // picks first image
        Alert.alert(SUCCESS_MESSAGES.IMAGE_PICKED, capturedImage.uri);
        return capturedImage;
    } else {
        console.log(CANCELL_MESSAGES.IMAGE_CANCELLED);
        return null;
    }
};




