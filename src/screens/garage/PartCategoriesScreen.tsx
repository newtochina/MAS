import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GlobalStyles } from '../../constants/Styles';

const CATEGORIES = [
    { id: '1', name: 'Exhaust', icon: 'flame' },
    { id: '2', name: 'Brakes', icon: 'disc' },
    { id: '3', name: 'Suspension', icon: 'hardware-chip' }, // using hardware-chip as placeholder for suspension
    { id: '4', name: 'Tires', icon: 'radio-button-on' },
    { id: '5', name: 'Engine', icon: 'cog' },
    { id: '6', name: 'Bodywork', icon: 'shield' },
];

export default function PartCategoriesScreen() {
    const navigation = useNavigation<any>();

    const renderCategory = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => navigation.navigate('PartBrands', { category: item })}
        >
            <View style={styles.iconContainer}>
                <Ionicons name={item.icon as any} size={32} color={Colors.primary} />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={GlobalStyles.screenContainer}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    columnWrapper: {
        justifyContent: 'space-between',
    },
    categoryCard: {
        backgroundColor: Colors.surface,
        width: '48%',
        aspectRatio: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    iconContainer: {
        marginBottom: 12,
    },
    categoryName: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: '600',
    },
});
