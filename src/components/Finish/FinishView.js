import React from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import FinishViewStyles from '../Finish/FinishViewStyles'
import ResponsiveCentered from './ResponsiveCentered'
import ActionButton from '../Finish/ActionButton'

const FinishView = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 4, justifyContent: 'space-around' }}>
                <Text style={FinishViewStyles.mainHeader}>You spent</Text>
                <Text style={FinishViewStyles.timeSubHeader}>00:00:00</Text>
            </View>
            <View style={{ flex: 1 }}>
                <ResponsiveCentered>
                    <Text style={FinishViewStyles.activityNameLabel}>Activity name</Text>
                </ResponsiveCentered>
                <ResponsiveCentered>
                    <TextInput style={FinishViewStyles.ActivityNameInput} />
                </ResponsiveCentered>
            </View>
            <View style={{ flex: 5 }}>
                <ResponsiveCentered>
                    <View style={FinishViewStyles.ActionButtonsContaner}>
                        <ActionButton label={'Cancel'} backgroundColor={'#F39527'} textColor={"#ffffff"} />
                        <ActionButton label={'Save'} backgroundColor={'#00CD5E'} textColor={"#ffffff"} />
                    </View>
                </ResponsiveCentered>
            </View>
        </View>
    )
}

export default FinishView