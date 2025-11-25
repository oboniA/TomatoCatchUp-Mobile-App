import { imagePickerGallery, imagePickerCamera } from './HandleImageActions';

export const imageAction = async (action) => {

    if ( action === 'gallery') {
        const getImage = await imagePickerGallery();
        if (getImage) {
            console.log('Gallery Image:', getImage.uri);
        }  

    } else if ( action === 'camera') {
        const getImage = await imagePickerCamera();
        if (getImage) {
            console.log('Captured Image:', getImage.uri);
        }  
        
    } else {
        Alert.alert('Error');
    }
};

