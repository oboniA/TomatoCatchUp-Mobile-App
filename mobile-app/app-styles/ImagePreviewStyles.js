import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b9e299',
    },

    header: {
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    backButton: {
        fontSize: 32,
        color: 'brown',
        fontWeight: 'bold',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'brown',
    },

    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    image: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
    },

    buttonContainer: {
        flexDirection: 'row',
        gap: 15,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },

    cancelButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'brown',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cancelButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'brown',
    },

    classifyButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: 'brown',
        alignItems: 'center',
        justifyContent: 'center',
    },

    classifyButtonDisabled: {
        opacity: 0.7,
    },

    classifyButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },

    loadingBarSection: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        gap: 10,
    },

    progressBarContainer: {
        width: 250,
        height: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 3,
        overflow: 'hidden',
    },

    progressBar: {
        height: '100%',
        backgroundColor: '#4CAF50',
        borderRadius:3,
    },
    
});
