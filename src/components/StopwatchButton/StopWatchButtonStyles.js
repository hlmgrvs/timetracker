import { StyleSheet } from 'react-native'

const StopWatchButtonStyles = StyleSheet.create({
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
        textTransform: "uppercase",
        fontWeight: 'bold'
    },

    mainActionButtonPauseText: {
        textTransform: "uppercase",
        fontSize: 24
    },


})

export default StopWatchButtonStyles
