import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GlobalStyles } from '../../constants/Styles';

const PARTS = [
    {
        id: '1',
        name: 'Titanium Slip-On Exhaust',
        price: '$1,299.00',
        image: 'https://images.unsplash.com/photo-1598555846683-16781203530f?q=80&w=3270&auto=format&fit=crop', // Placeholder
        description: 'High performance titanium slip-on exhaust system.',
    },
    {
        id: '2',
        name: 'Carbon Fiber Full System',
        price: '$2,499.00',
        image: 'https://images.unsplash.com/photo-1598555846683-16781203530f?q=80&w=3270&auto=format&fit=crop', // Placeholder
        description: 'Full racing exhaust system made from lightweight carbon fiber.',
    },
];

export default function PartsListScreen() {
    const route = useRoute();
    const { brand, category } = route.params as { brand: any, category: any };

    const renderPart = ({ item }: { item: any }) => (
        <View style={GlobalStyles.card}>
            <Image source={{ uri: item.image }} style={styles.partImage} />
            <View style={styles.partInfo}>
                <Text style={styles.partName}>{item.name}</Text>
                <Text style={styles.partPrice}>{item.price}</Text>
                <Text style={styles.partDescription}>{item.description}</Text>
                <TouchableOpacity
                    style={styles.buyButton}
                    onPress={() => alert(`Added ${item.name} to cart.\n\n${item.description}`)}
                >
                    <Text style={styles.buyButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.header}>
                <Text style={GlobalStyles.title}>{brand.name} {category.name}</Text>
            </View>
            <FlatList
                data={PARTS}
                renderItem={renderPart}
                keyExtractor={(item) => item.id}
                contentContainerStyle={GlobalStyles.screenContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    partImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 12,
    },
    partInfo: {
        gap: 8,
    },
    partName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
    },
    partPrice: {
        fontSize: 18,
        color: Colors.accent,
        fontWeight: 'bold',
    },
    partDescription: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
    buyButton: {
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    buyButtonText: {
        color: Colors.text,
        fontWeight: 'bold',
    },
});
