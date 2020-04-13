import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment'

import i18n from '../../i18n/i18n'
import HomeViewStyles from '../Home/HomeViewStyles';

const StopWatchButton = ({ time, startOnPressAction, timerOnPressAction }) => {
    if (time > 0) {
        return (
            <TouchableOpacity style={HomeViewStyles.mainActionButton}
                onPress={timerOnPressAction}>
                <Text style={HomeViewStyles.mainActionButtonText}>{moment.utc(time).format('HH:mm:ss')}</Text>
                <Text style={[HomeViewStyles.mainActionButtonText, HomeViewStyles.mainActionButtonPauseText]}>{i18n.HOME.PAUSE}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={HomeViewStyles.mainActionButton}
            onPress={startOnPressAction}>
            <Text style={HomeViewStyles.mainActionButtonText}>{i18n.HOME.START}</Text>
        </TouchableOpacity>
    )
}

export default StopWatchButton