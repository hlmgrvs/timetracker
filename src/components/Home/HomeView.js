import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import i18n from '../../i18n/i18n'

const HomeView = () => {
    return (
        <View style={[{ flex: 1 }, HomeViewStyles.homeViewContainer]} >
            <View style={{ flex: 1 }}>
    <Text style={HomeViewStyles.welcomeHeader}>{i18n.HOME.WELCOME_HEADER}</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TouchableOpacity style={HomeViewStyles.mainActionButton} onPress={() => {
                    console.log("button pressed");
                }}>
                    <Text style={HomeViewStyles.mainActionButtonText}>{i18n.HOME.START}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default HomeView;