import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Colors } from '../constants/Colors';
import AddBikeScreen from '../screens/garage/AddBikeScreen';
import BikeDetailsScreen from '../screens/garage/BikeDetailsScreen';
import GarageHomeScreen from '../screens/garage/GarageHomeScreen';
import PartBrandsScreen from '../screens/garage/PartBrandsScreen';
import PartCategoriesScreen from '../screens/garage/PartCategoriesScreen';
import PartsListScreen from '../screens/garage/PartsListScreen';

const Stack = createNativeStackNavigator();

export default function GarageNavigator() {
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
            <Stack.Screen name="GarageHome" component={GarageHomeScreen} options={{ title: 'My Garage' }} />
            <Stack.Screen name="AddBike" component={AddBikeScreen} options={{ title: 'Add Motorcycle' }} />
            <Stack.Screen name="BikeDetails" component={BikeDetailsScreen} options={{ title: 'Bike Details' }} />
            <Stack.Screen name="PartCategories" component={PartCategoriesScreen} options={{ title: 'Categories' }} />
            <Stack.Screen name="PartBrands" component={PartBrandsScreen} options={{ title: 'Select Brand' }} />
            <Stack.Screen name="PartsList" component={PartsListScreen} options={{ title: 'Parts' }} />
        </Stack.Navigator>
    );
}
