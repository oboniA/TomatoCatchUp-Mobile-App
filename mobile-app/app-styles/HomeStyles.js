import { StyleSheet } from "react-native";

export default StyleSheet.create ({

    container: {
        flex: 1,                   // full height of screen
        backgroundColor: '#b9e299',
        alignItems: 'center',      
        justifyContent: 'center',  
        paddingHorizontal: 50,
        //paddingVertical: ??,
    },

    title: {
        fontSize: 30,
        marginBottom: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'brown',
    },

    buttonRow: {
        flexDirection: 'column',
        gap: 30,
    },

    iconButton: {
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 10,
    },

    icon: {
        width: 80,
        height: 80,
        marginBottom: 0.1,
        justifyContent: 'center',
    },

    iconLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: 'brown',
        justifyContent: 'center',
    },

});