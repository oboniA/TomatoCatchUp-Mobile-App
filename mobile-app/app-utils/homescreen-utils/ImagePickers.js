import { imagePickerGallery, imagePickerCamera } from './HandleImageActions';
import { IMAGE_PICKER_ACTIONS } from './ImagePickerConstants';


export const imageAction = async (action) => {
    if ( action === IMAGE_PICKER_ACTIONS.GALLERY) {
        const getImage = await imagePickerGallery();
        if (getImage) {
            console.log('Gallery Image:', getImage.uri);
        }  

    } else if ( action === IMAGE_PICKER_ACTIONS.CAMERA) {
        const getImage = await imagePickerCamera();
        if (getImage) {
            console.log('Captured Image:', getImage.uri);
        }  
        
    } else {
        Alert.alert('Error');
    }
};

// CHANGE: Using constants instead of magic strings