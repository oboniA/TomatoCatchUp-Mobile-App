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

});
