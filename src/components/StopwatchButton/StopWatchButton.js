import React from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';
import moment from 'moment'
import StopWatchButtonStyles from './StopWatchButtonStyles'

import i18n from '../../i18n/i18n'

const StopWatchButton = ({ time, startOnPressAction, timerOnPressAction, paused }) => {
    const timerOpacity = new Animated.Value(1);
    const blinkDelay = 500;
    const blinker = (toValue) => {
        if (paused) {
            Animated.timing(timerOpacity, {
                toValue,
                useNativeDriver: true,
                duration: blinkDelay
            }).start(() => {
                blinker(toValue === 1 ? 0 : 1);
            })
        } else {
            Animated.timing(timerOpacity, {
                toValue: 1,
                useNativeDriver: true,
                duration: blinkDelay
            }).start()
        }
    }

    blinker(0);

    if (time > 0) {
        return (
            <TouchableOpacity style={StopWatchButtonStyles.mainActionButton}
                onPress={timerOnPressAction}>
                <Animated.View style={[{ opacity: timerOpacity }, StopWatchButtonStyles.mainActionButton]}>
                    <Text style={StopWatchButtonStyles.mainActionButtonText}>{moment.utc(time).format(i18n.TIME_FORMAT)}</Text>
                    <Text style={[StopWatchButtonStyles.mainActionButtonText, StopWatchButtonStyles.mainActionButtonPauseText]}>{i18n.STOP_WATCH.PAUSE}</Text>
                </Animated.View>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={StopWatchButtonStyles.mainActionButton}
            onPress={startOnPressAction}>
            <Text style={StopWatchButtonStyles.mainActionButtonText}>{i18n.STOP_WATCH.START}</Text>
        </TouchableOpacity>
    )
}

export default StopWatchButton