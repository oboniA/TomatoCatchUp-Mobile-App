import * as ImagePicker from 'expo-image-picker';
import { Alert, Linking } from 'react-native';
import { ERROR_MESSAGES } from './ImagePickerConstants';


// Helper function for Alerts
const permissionAlert = async (title, message, checkPermission) => {
    return new Promise((resolve) => {
        Alert.alert(title, message,
            [   
                // user clicks cancel button
                { text: 'Cancel', onPress: resolve(false), style: 'cancel' },

                // user clicks settings button
                {   text: 'Settings', 
                    onPress: () => {
                        Linking.openSettings(); 
                        // wait 1000ms (1s) for settings app to close and permission change to take effect
                        setTimeout(async () => {
                            const result = await checkPermission();
                            resolve(result);
                        }, 1000)
                    } 
                },
            ]
        )
    })
};


export async function galleryPermission() {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    // when permission not granted to access gallery
    if (!granted) {
        return await permissionAlert(
            ERROR_MESSAGES.GALLERY_PERMISSION_DENIED,
            ERROR_MESSAGES.GALLERY_PERMISSION_MESSAGE,
            galleryPermission
        );
    }   
    return true; 
}

export const cameraPermission = async() => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    // when permission not granted to access camera
    if (!granted) {
        return await permissionAlert(
            ERROR_MESSAGES.CAMERA_PERMISSION_DENIED,
            ERROR_MESSAGES.CAMERA_PERMISSION_MESSAGE,
            cameraPermission
        );
    }
    return true;
}




