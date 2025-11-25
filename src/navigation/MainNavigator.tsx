import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Colors } from '../constants/Colors';
import ApparelScreen from '../screens/ApparelScreen';
import MapScreen from '../screens/MapScreen';
import VoiceScreen from '../screens/VoiceScreen';
import GarageNavigator from './GarageNavigator';
import ProfileNavigator from './ProfileNavigator';
import VisualizerNavigator from './VisualizerNavigator';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    if (route.name === 'Garage') {
                        iconName = focused ? 'bicycle' : 'bicycle-outline';
                    } else if (route.name === 'Visualizer') {
                        iconName = focused ? 'eye' : 'eye-outline';
                    } else if (route.name === 'Map') {
                        iconName = focused ? 'map' : 'map-outline';
                    } else if (route.name === 'Apparel') {
                        iconName = focused ? 'shirt' : 'shirt-outline';
                    } else if (route.name === 'Voice') {
                        iconName = focused ? 'mic' : 'mic-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else {
                        iconName = 'alert';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.textSecondary,
                tabBarStyle: {
                    backgroundColor: Colors.tabBar,
                    borderTopColor: Colors.border,
                },
                headerStyle: {
                    backgroundColor: Colors.background,
                    shadowColor: 'transparent',
                },
                headerTintColor: Colors.text,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            })}
        >
            <Tab.Screen name="Garage" component={GarageNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Visualizer" component={VisualizerNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Apparel" component={ApparelScreen} />
            <Tab.Screen name="Voice" component={VoiceScreen} />
            <Tab.Screen name="Profile" component={ProfileNavigator} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
