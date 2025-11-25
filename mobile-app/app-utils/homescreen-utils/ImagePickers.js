import { imagePickerGallery, imagePickerCamera } from './HandleImageActions';
import { IMAGE_PICKER_ACTIONS, SUCCESS_MESSAGES, ERROR_MESSAGES } from './ImagePickerConstants';


export const imageAction = async (action) => {
    if ( action === IMAGE_PICKER_ACTIONS.GALLERY) {
        const getImage = await imagePickerGallery();
        if (getImage) {
            console.log(SUCCESS_MESSAGES.GALLERY_SELECTED, getImage.uri);
        }  
        return getImage;

    } else if ( action === IMAGE_PICKER_ACTIONS.CAMERA) {
        const getImage = await imagePickerCamera();
        if (getImage) {
            console.log(SUCCESS_MESSAGES.CAMERA_CAPTURED, getImage.uri);
        }  
        return getImage;
        
    } else {
        Alert.alert('Error', ERROR_MESSAGES.INVALID_ACTION);
        return null;
    }
};

