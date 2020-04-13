import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeViewStyles from './HomeViewStyles';

const HomeView = () => {
    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1 }}>
                <Text style={HomeViewStyles}>Good Morning!</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TouchableOpacity onPress={() => {
                    console.log("button pressed");
                }}>
                    <Text>START</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default HomeView;