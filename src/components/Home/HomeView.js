import React from 'react';
import { View, Text, AppState } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n'
import StopWatchButton from '../StopwatchButton/StopWatchButton';

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    };

    async handleAppStateChange(nextAppState) {
        console.log(nextAppState);
        const now = new Date().getTime();
        
        const { time } = this.state;
        await AsyncStorage.setItem('@time', JSON.stringify(time));
        await AsyncStorage.setItem('@appStateChangedStamp', JSON.stringify(now));

        const readTime = await AsyncStorage.getItem('@time');
        const readState = await AsyncStorage.getItem('@appStateChangedStamp');
        console.log(readTime, readState);



    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange)
    }

    startTimer() {
        setInterval(() => {
            const { time, paused } = this.state;
            if (!paused) {
                this.setState({
                    time: time + 1000
                })
            }
        });
    }

    pauseTimer() {
        const { paused } = this.state;
        this.setState({
            paused: !paused
        })
    }

    render() {
        const { time } = this.state;
        return (
            <View style={[{ flex: 1 }, HomeViewStyles.homeViewContainer]} >
                <View style={{ flex: 1 }}>
                    <Text style={HomeViewStyles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <StopWatchButton
                        time={time}
                        startOnPressAction={this.startTimer}
                        timerOnPressAction={this.pauseTimer}
                    />
                </View>
            </View>
        );
    }
};

export default HomeView;