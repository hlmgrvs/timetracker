import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ActionButtonStyles = StyleSheet.create({
    TouchableStyle: {
        width: 134,
        height: 44,
        borderRadius: 10,
        justifyContent: 'center'
    },
    CaptionStyle: {
        fontSize: 24,
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

const ActionButton = ({ label, textColor, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[ActionButtonStyles.TouchableStyle, {backgroundColor}]}>
            <Text style={[ActionButtonStyles.CaptionStyle, { color: textColor }]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ActionButton;
