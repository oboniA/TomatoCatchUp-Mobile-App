import * as ImagePicker from 'expo-image-picker';
import { Alert, Linking } from 'react-native';
import { ERROR_MESSAGES } from './ImagePickerConstants';


export async function galleryPermission() {
    
    const { actionPermission } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    // when no permission to access gallery
    if (!actionPermission) {
        Alert.alert(ERROR_MESSAGES.GALLERY_PERMISSION_DENIED, ERROR_MESSAGES.GALLERY_PERMISSION_MESSAGE,
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Settings', onPress: () => Linking.openSettings() },
            ]
        );
         return false;
    }
    return true; 
};

export const cameraPermission = async() => {
    
    const { actionPermission } = await ImagePicker.requestCameraPermissionsAsync();

    // when no permission to access camera
    if (!actionPermission) {
        Alert.alert(ERROR_MESSAGES.CAMERA_PERMISSION_DENIED, ERROR_MESSAGES.CAMERA_PERMISSION_MESSAGE,
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Settings', onPress: () => Linking.openSettings() },
            ]
        );
        return false;
    }
    return true;
};





