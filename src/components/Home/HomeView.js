import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n'
import StopWatchButton from '../StopwatchButton/StopWatchButton';

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }
    };

    render() {
        const { time } = this.state;
        return (
            <View style={[{ flex: 1 }, HomeViewStyles.homeViewContainer]} >
                <View style={{ flex: 1 }}>
                    <Text style={HomeViewStyles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
                </View>
                <View style={{ flex: 2 }}>
                    {/* {time > 0 ? this.renderRunningTime() : this.renderStartButton()} */}
                    <StopWatchButton
                        time={time}
                        startOnPressAction={() => {
                            setInterval(() => {
                                const { time, paused } = this.state;
                                if (!paused) {
                                    this.setState({
                                        time: time + 1000
                                    })
                                }
                            });
                        }}
                        timerOnPressAction={() => {
                            const { paused } = this.state;
                            this.setState({
                                paused: !paused
                            })
                        }}
                    />
                </View>
            </View>
        );
    }
};

export default HomeView;