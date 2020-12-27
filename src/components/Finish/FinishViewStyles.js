import { StyleSheet } from 'react-native'

const FinishViewStyles = StyleSheet.create({
    mainHeader: {
        fontSize: 40,
        textAlign: 'center'
    },
    timeSubHeader: {
        fontSize: 40,
        textAlign: 'center'
    },
    activityNameLabel: {
        fontSize: 16
    },
    ActivityNameInput: {
        borderRadius: 5,
        borderColor: '#848484',
        borderWidth: 1,
        height: 44,
        marginTop: 7
    },
    ActionButtonsContaner: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 65}
})

export default FinishViewStyles;