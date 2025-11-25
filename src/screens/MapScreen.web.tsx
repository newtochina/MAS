import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

// Mock data for mechanics (Australian locations)
const MECHANICS = [
    {
        id: '1',
        name: 'Ducati Sydney',
        type: 'brand',
        coordinate: { latitude: -33.8967, longitude: 151.1926 }, // Alexandria, NSW
        address: '123 O\'Riordan St, Alexandria NSW 2015',
    },
    {
        id: '2',
        name: 'Sydney Motorcycle Workshop',
        type: 'third_party',
        coordinate: { latitude: -33.9100, longitude: 151.1800 }, // St Peters
        address: '45 Princes Hwy, St Peters NSW 2044',
    },
    {
        id: '3',
        name: 'Northern Beaches Moto',
        type: 'third_party',
        coordinate: { latitude: -33.7600, longitude: 151.2800 }, // Brookvale
        address: '789 Pittwater Rd, Brookvale NSW 2100',
    },
];

export default function MapScreen() {
    const [filter, setFilter] = useState<'all' | 'brand' | 'third_party'>('all');

    const filteredMechanics = MECHANICS.filter(m => {
        if (filter === 'all') return true;
        return m.type === filter;
    });

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.webFallback}>
                <Text style={GlobalStyles.title}>Map View</Text>
                <Text style={GlobalStyles.subtitle}>Map is not fully supported on web in this demo.</Text>
                <Text style={{ color: Colors.textSecondary, marginBottom: 20 }}>
                    Listing mechanics instead:
                </Text>
                <ScrollView style={{ width: '100%' }}>
                    {filteredMechanics.map(m => (
                        <View key={m.id} style={[GlobalStyles.card, { marginBottom: 16, width: '100%' }]}>
                            <Text style={{ color: Colors.text, fontWeight: 'bold', fontSize: 18 }}>{m.name}</Text>
                            <Text style={{ color: Colors.textSecondary, marginTop: 4 }}>{m.type === 'brand' ? 'Official Dealer' : 'Independent Mechanic'}</Text>
                            <Text style={{ color: Colors.textSecondary, marginTop: 4 }}>{m.address}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.filterContainer}>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
                    onPress={() => setFilter('all')}
                >
                    <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'brand' && styles.filterButtonActive]}
                    onPress={() => setFilter('brand')}
                >
                    <Text style={[styles.filterText, filter === 'brand' && styles.filterTextActive]}>Official</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'third_party' && styles.filterButtonActive]}
                    onPress={() => setFilter('third_party')}
                >
                    <Text style={[styles.filterText, filter === 'third_party' && styles.filterTextActive]}>Independent</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    webFallback: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 100, // Space for filter
    },
    filterContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        backgroundColor: Colors.surface,
        borderRadius: 12,
        padding: 4,
        ...GlobalStyles.shadow,
    },
    filterButton: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 8,
    },
    filterButtonActive: {
        backgroundColor: Colors.primary,
    },
    filterText: {
        color: Colors.textSecondary,
        fontWeight: '600',
    },
    filterTextActive: {
        color: Colors.text,
    },
});
