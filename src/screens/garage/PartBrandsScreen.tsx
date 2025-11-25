import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GlobalStyles } from '../../constants/Styles';

const BRANDS = [
    { id: '1', name: 'Akrapovič' },
    { id: '2', name: 'Yoshimura' },
    { id: '3', name: 'Arrow' },
    { id: '4', name: 'SC Project' },
    { id: '5', name: 'Termignoni' },
];

export default function PartBrandsScreen() {
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { category } = route.params as { category: any };

    const renderBrand = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={GlobalStyles.card}
            onPress={() => navigation.navigate('PartsList', { brand: item, category })}
        >
            <View style={styles.brandRow}>
                <Text style={styles.brandName}>{item.name}</Text>
                <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.header}>
                <Text style={GlobalStyles.title}>{category.name} Brands</Text>
            </View>
            <FlatList
                data={BRANDS}
                renderItem={renderBrand}
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
    brandRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    brandName: {
        fontSize: 18,
        color: Colors.text,
        fontWeight: '500',
    },
});
