import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

const INVENTORY = [
    { id: '1', name: 'Motul 7100 10W40', price: '$89.95', image: 'https://images.unsplash.com/photo-1635770312029-081e2544692e?q=80&w=2000&auto=format&fit=crop' },
    { id: '2', name: 'Shoei RF-1400', price: '$899.00', image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=2000&auto=format&fit=crop' },
    { id: '3', name: 'Chain Lube', price: '$24.95', image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&w=2000&auto=format&fit=crop' },
    { id: '4', name: 'Oil Filter', price: '$19.95', image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&w=2000&auto=format&fit=crop' },
];

export default function ShopStoreScreen() {
    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={24} color="#FFF" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.header}>
                <Text style={GlobalStyles.title}>Shop Store</Text>
                <TouchableOpacity>
                    <Ionicons name="cart" size={24} color={Colors.text} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={INVENTORY}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={GlobalStyles.screenContainer}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    productCard: {
        backgroundColor: Colors.surface,
        borderRadius: 12,
        width: '48%',
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    productImage: {
        width: '100%',
        height: 120,
    },
    productInfo: {
        padding: 12,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    addButton: {
        position: 'absolute',
        bottom: 8,
        right: 8,
        backgroundColor: Colors.primary,
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
