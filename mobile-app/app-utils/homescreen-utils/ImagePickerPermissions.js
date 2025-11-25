import * as ImagePicker from 'expo-image-picker';
import { Alert, Linking } from 'react-native';


export async function galleryPermission() {
    
    const { actionPermission } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    // when no permission to access gallery
    if (!actionPermission) {
        Alert.alert('Access Denied!', 'Allow Access to Your Photos from the settings.',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Settings', onPress: () => Linking.openSettings() },
            ]
        );
         return false;
    }
    return true; 
};

//TODO: 
// add camera permissions



