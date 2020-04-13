import { StyleSheet } from 'react-native'

const HomeViewStyles = StyleSheet.create({
    homeViewContainer: {
        alignItems: 'center' 
    },

    welcomeHeader: {
        textAlign: 'center',
        fontSize: 40,
        color: '#000',
        marginTop: 50
    },

    mainActionButton: {
        width: 250,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00CD5E',
        borderRadius: 125
    },

    mainActionButtonText: {
        fontSize: 60,
        color: '#FFF',
        fontWeight: 'bold'
    }

});

export default HomeViewStyles;