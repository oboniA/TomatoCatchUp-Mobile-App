import { Alert } from 'react-native';

// URL of backend server
const BACKEND_URL = 'http://192.168.0.8:5000/classify';

export const classifyImage = async (imageUri) => {
    try {
        // create a FormData object to append image file
        const formData = new FormData();
        formData.append('image', {
            uri: imageUri,
            type: 'image/jpeg',
            name: 'leaf.jpg',
        });
        
        // send POST request with form data
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            body: formData,
            headers: {},
        });
        
        // if response is successful give classification result
        const data = await response.json();
        console.log('Classification result:', data);
        
        return data;

    } catch (error) {
        console.error('Error sending image:', error);
        Alert.alert('Error', 'Failed to classify image');
        return null;
    }
};


// CHANGES:
// headers: {} because fetch with FormData automatically sets the correct headers. 
// Removed 'Content-Type': 'multipart/form-data' to avoid boundary issues.