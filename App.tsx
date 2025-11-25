import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from './src/constants/Colors';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar style="light" backgroundColor={Colors.background} />
                <MainNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
