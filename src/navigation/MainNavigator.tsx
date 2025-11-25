import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Colors } from '../constants/Colors';
import ShopStoreScreen from '../screens/ShopStoreScreen';
import GarageNavigator from './GarageNavigator';
import ProfileNavigator from './ProfileNavigator';
import VisualizerNavigator from './VisualizerNavigator';

const Tab = createBottomTabNavigator();


// ... imports

export default function MainNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Visualizer') {
                        iconName = focused ? 'eye' : 'eye-outline';
                    } else if (route.name === 'Store') {
                        iconName = focused ? 'cart' : 'cart-outline';
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
            <Tab.Screen name="Home" component={GarageNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Visualizer" component={VisualizerNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Store" component={ShopStoreScreen} />
            <Tab.Screen name="Profile" component={ProfileNavigator} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
