import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#b9e299',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        gap: 10,
    },

    backButton: {
        fontSize: 30,
        color: 'brown',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'brown',
    },

    statusContainer: {
        padding: 20,
        marginBottom: 20,
    },

    statusLabel: {
        fontSize: 14,
        color: '#666',
        fontWeight: '600',
        marginBottom: 5,
    },

    statusValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'brown',
    },

    detailsCard: {
        padding: 15,
        marginBottom: 15,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'brown',
        marginBottom: 10,
    },

    cardText: {
        fontSize: 14,
        color: 'brown',
        lineHeight: 22,
    },

    readMoreButton: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },

    readMoreText: {
        color: 'brown',
        fontWeight: '600',
        fontSize: 14,
    },

    buttonContainer: {
        marginTop: 'auto',
        gap: 10,
    },

    backHomeButton: {
        backgroundColor: 'brown',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    backHomeText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});
