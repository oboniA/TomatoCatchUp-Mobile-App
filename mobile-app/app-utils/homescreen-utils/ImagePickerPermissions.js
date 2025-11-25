import * as ImagePicker from 'expo-image-picker';
import { Alert, Linking } from 'react-native';


export async function galleryPermission() {
    
    const { actionPermission } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    // when no permission to access gallery
    if (!actionPermission) {
        Alert.alert('Gallery Access Denied!', 'allow access to your Photos from the device settings.',
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
        Alert.alert('Camera Access Denied!', 'allow Camera access from your device settings.',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Settings', onPress: () => Linking.openSettings() },
            ]
        );
        return false;
    }
    return true;
};





