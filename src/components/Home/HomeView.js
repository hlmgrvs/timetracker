import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n'

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        }
    };

    renderStartButton() {
        return (
            <TouchableOpacity style={HomeViewStyles.mainActionButton}
                onPress={() => {
                    setInterval(() => {
                        const { time, paused } = this.state;
                        if (!paused) {
                            this.setState({
                                time: time + 1000
                            })
                        }
                    });
                }}>
                <Text style={HomeViewStyles.mainActionButtonText}>{i18n.HOME.START}</Text>
            </TouchableOpacity>
        )
    }

    renderRunningTime() {
        const { time } = this.state;
        return (
            <TouchableOpacity style={HomeViewStyles.mainActionButton}
                onPress={() => {
                    const { paused } = this.state;
                    this.setState({
                        paused: !paused
                    })
                }}>
                <Text style={HomeViewStyles.mainActionButtonText}>{time}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { time } = this.state;
        return (
            <View style={[{ flex: 1 }, HomeViewStyles.homeViewContainer]} >
                <View style={{ flex: 1 }}>
                    <Text style={HomeViewStyles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
                </View>
                <View style={{ flex: 2 }}>
                    {time > 0 ? this.renderRunningTime() : this.renderStartButton()}
                </View>
            </View>
        );
    }
};

export default HomeView;