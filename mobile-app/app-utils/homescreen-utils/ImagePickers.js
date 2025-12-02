import { imagePickerGallery, imagePickerCamera } from './HandleImageActions';
import { IMAGE_PICKER_ACTIONS, ERROR_MESSAGES } from './ImagePickerConstants';
import { Alert } from 'react-native';

export const imageAction = async (action, navigation) => {

    let getImage = null;

    if ( action === IMAGE_PICKER_ACTIONS.GALLERY) {
        getImage = await imagePickerGallery();
    } else if ( action === IMAGE_PICKER_ACTIONS.CAMERA) {
        getImage = await imagePickerCamera();
    } else {
        Alert.alert('Error', ERROR_MESSAGES.INVALID_ACTION);
        return null;
    }
    
    if (!getImage) {
        return null;
    }
    
    // navigate to Preview Screen with the selected Image
    navigation.navigate('Preview', { imageUri: getImage.uri });
    return getImage;
};
