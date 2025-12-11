import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';
import ShopStoreScreen from '../screens/ShopStoreScreen';
import GarageNavigator from './GarageNavigator';
import ProfileNavigator from './ProfileNavigator';
import VisualizerNavigator from './VisualizerNavigator';

const Tab = createMaterialTopTabNavigator();

export default function MainNavigator() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }} edges={['top']}>
            <StatusBar style="light" />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveTintColor: Colors.textSecondary,
                    tabBarStyle: {
                        backgroundColor: Colors.background,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.border,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: Colors.primary,
                        height: 3,
                    },
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 12,
                        textTransform: 'uppercase',
                    },
                    tabBarIcon: ({ focused, color }) => {
                        let iconName: keyof typeof Ionicons.glyphMap;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Visualizer') {
                            iconName = focused ? 'eye' : 'eye-outline';
                        } else if (route.name === 'Store') {
                            iconName = focused ? 'cart' : 'cart-outline';
                        } else if (route.name === 'Dashboard') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else {
                            iconName = 'alert';
                        }

                        return <Ionicons name={iconName} size={20} color={color} />;
                    },
                    tabBarShowIcon: true,
                })}
            >
                <Tab.Screen name="Home" component={GarageNavigator} />
                <Tab.Screen name="Visualizer" component={VisualizerNavigator} />
                <Tab.Screen name="Store" component={ShopStoreScreen} />
                <Tab.Screen name="Dashboard" component={ProfileNavigator} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}
