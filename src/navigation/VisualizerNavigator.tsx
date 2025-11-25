import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Colors } from '../constants/Colors';
import PartBrandsScreen from '../screens/garage/PartBrandsScreen';
import PartsListScreen from '../screens/garage/PartsListScreen';
import VisualizerScreen from '../screens/VisualizerScreen';

const Stack = createNativeStackNavigator();

export default function VisualizerNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.background,
                },
                headerTintColor: Colors.text,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                contentStyle: {
                    backgroundColor: Colors.background,
                },
            }}
        >
            <Stack.Screen name="VisualizerHome" component={VisualizerScreen} options={{ title: 'Visualizer' }} />
            <Stack.Screen name="PartBrands" component={PartBrandsScreen} options={{ title: 'Select Brand' }} />
            <Stack.Screen name="PartsList" component={PartsListScreen} options={{ title: 'Parts' }} />
        </Stack.Navigator>
    );
}
