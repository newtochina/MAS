import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GlobalStyles } from '../../constants/Styles';

// Mock data for bikes
const MOCK_BIKES = [
    {
        id: '1',
        name: 'Ducati Panigale V4',
        year: 2023,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=3270&auto=format&fit=crop',
    },
];

export default function GarageHomeScreen() {
    const navigation = useNavigation();
    const [bikes, setBikes] = useState(MOCK_BIKES);

    const renderBikeItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={GlobalStyles.card}
            onPress={() => navigation.navigate('BikeDetails', { bike: item })}
        >
            <Image source={{ uri: item.image }} style={styles.bikeImage} />
            <View style={styles.bikeInfo}>
                <Text style={styles.bikeName}>{item.name}</Text>
                <Text style={styles.bikeYear}>{item.year}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={bikes}
                renderItem={renderBikeItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={GlobalStyles.screenContainer}
                ListHeaderComponent={() => (
                    <View style={styles.header}>
                        <Text style={GlobalStyles.title}>My Garage</Text>
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => navigation.navigate('AddBike')}
                        >
                            <Ionicons name="add" size={24} color={Colors.background} />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyState}>
                        <Text style={GlobalStyles.subtitle}>No bikes yet</Text>
                        <Text style={{ color: Colors.textSecondary }}>Add your first motorcycle!</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    addButton: {
        backgroundColor: Colors.primary,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bikeImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 16,
    },
    bikeInfo: {
        flex: 1,
    },
    bikeName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
    },
    bikeYear: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
    emptyState: {
        alignItems: 'center',
        marginTop: 50,
    },
});
