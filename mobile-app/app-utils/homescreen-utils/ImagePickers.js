import { imagePickerGallery, imagePickerCamera } from './HandleImageActions';
import { IMAGE_PICKER_ACTIONS, SUCCESS_MESSAGES, ERROR_MESSAGES } from './ImagePickerConstants';
import { Alert } from 'react-native';

// URL of Flask backend LAN IP address
const BACKEND_URL = 'http://192.168.0.8:5000/classify';

export const imageAction = async (action, navigation) => {

    // get image based on user's gallery or camera
    let getImage = null;

    // check if valid action was passed in
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

    // send the selected image to backend using a POST request
    try {
        const formData = new FormData();
        formData.append('image', {
            uri: getImage.uri,
            type: 'image/jpeg',
            name: 'leaf.jpg',
        });

        // Send the form data to backend API
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        // parse JSON response
        const data = await response.json();
        console.log('Classification result:', data);
        
        // navigate to result screen with classification result
        navigation.navigate('Result', { result: data });
        return data;

    } catch (error) {
        console.error('Error sending image:', error);
        Alert.alert('Error', 'Failed to send image to backend');
        return null;
    }

};

