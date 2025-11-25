import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../constants/Styles';

export default function GarageScreen() {
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.screenContainer}>
                <Text style={GlobalStyles.title}>Garage</Text>
                <Text style={GlobalStyles.subtitle}>Your Motorcycles</Text>
            </View>
        </View>
    );
}
