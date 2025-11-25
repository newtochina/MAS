import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

const APPAREL_ITEMS = [
    {
        id: '1',
        name: 'Alpinestars Jacket',
        price: 'A$499.99',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=3336&auto=format&fit=crop',
    },
    {
        id: '2',
        name: 'Shoei Helmet',
        price: 'A$699.99',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=3336&auto=format&fit=crop',
    },
    {
        id: '3',
        name: 'Dainese Gloves',
        price: 'A$199.99',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=3336&auto=format&fit=crop',
    },
];

export default function ApparelScreen() {
    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={styles.itemCard}
            onPress={() => alert(`${item.name} added to cart!\nPrice: ${item.price}`)}
        >
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={APPAREL_ITEMS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={GlobalStyles.screenContainer}
                columnWrapperStyle={styles.columnWrapper}
                ListHeaderComponent={() => (
                    <View style={styles.header}>
                        <Text style={GlobalStyles.title}>Riding Gear</Text>
                        <Text style={GlobalStyles.subtitle}>Premium apparel for riders</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    itemCard: {
        backgroundColor: Colors.surface,
        width: '48%',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    itemImage: {
        width: '100%',
        height: 150,
    },
    itemInfo: {
        padding: 12,
    },
    itemName: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4,
    },
    itemPrice: {
        color: Colors.accent,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
