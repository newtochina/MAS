import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

const CATEGORIES = ['All', 'Oil & Fluids', 'Helmets', 'Parts', 'Accessories'];

const INVENTORY = [
    // Oil & Fluids
    { id: '1', name: 'Motul 7100 10W40 4T', price: '$89.95', category: 'Oil & Fluids', image: 'https://images.unsplash.com/photo-1635770312029-081e2544692e?q=80&w=2000&auto=format&fit=crop', description: '100% Synthetic 4-Stroke lubricant – Ester Technology – Meets bike manufacturer specifications.' },
    { id: '3', name: 'Chain Lube Factory Line', price: '$24.95', category: 'Oil & Fluids', image: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&w=2000&auto=format&fit=crop', description: 'White colored lubricant for racing motorcycle chains: Speed and Endurance.' },
    { id: '7', name: 'Brake Fluid DOT 4', price: '$18.95', category: 'Oil & Fluids', image: 'https://images.unsplash.com/photo-1606577924004-75d2de58f6a8?q=80&w=2000&auto=format&fit=crop', description: 'High boiling point brake fluid for hydraulic brake and clutch systems.' },
    { id: '8', name: 'Coolant Factory Line', price: '$32.95', category: 'Oil & Fluids', image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2000&auto=format&fit=crop', description: 'Ready to use cooling liquid for motorcycles. Anti-corrosion and anti-freeze.' },

    // Helmets
    { id: '2', name: 'Shoei RF-1400 Helmet', price: '$899.00', category: 'Helmets', image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=2000&auto=format&fit=crop', description: 'The latest generation of the most prestigious sport helmet.' },
    { id: '9', name: 'AGV Pista GP RR', price: '$1,449.95', category: 'Helmets', image: 'https://images.unsplash.com/photo-1589750603845-ea85c2d90957?q=80&w=2000&auto=format&fit=crop', description: 'Full carbon fiber helmet used by MotoGP riders. Extreme performance.' },
    { id: '10', name: 'Arai Corsair-X', price: '$979.95', category: 'Helmets', image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=2000&auto=format&fit=crop', description: 'Legendary ventilation and protection. The choice of champions.' },
    { id: '11', name: 'Bell Qualifier DLX', price: '$279.95', category: 'Helmets', image: 'https://images.unsplash.com/photo-1622185135505-2d795043dfeb?q=80&w=2000&auto=format&fit=crop', description: 'Packed with features at an aggressive price. MIPS energy management system.' },

    // Parts
    { id: '4', name: 'K&N Oil Filter KN-204', price: '$19.95', category: 'Parts', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop', description: 'High flow rates, exceptional filtration, and durable construction.' },
    { id: '5', name: 'Brembo Brake Pads', price: '$45.00', category: 'Parts', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=3270&auto=format&fit=crop', description: 'Sintered street brake pads for superior stopping power.' },
    { id: '12', name: 'NGK Iridium Spark Plug', price: '$12.95', category: 'Parts', image: 'https://images.unsplash.com/photo-1635770310969-e0b00e400085?q=80&w=2000&auto=format&fit=crop', description: 'Improved throttle response and superior anti-fouling.' },
    { id: '13', name: 'DID 520 Chain', price: '$120.95', category: 'Parts', image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=2000&auto=format&fit=crop', description: 'High performance X-Ring chain for street and track use.' },

    // Accessories
    { id: '6', name: 'Alpinestars Gloves', price: '$129.95', category: 'Accessories', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=2000&auto=format&fit=crop', description: 'Premium leather gloves with knuckle protection.' },
    { id: '14', name: 'Dainese Leather Jacket', price: '$599.95', category: 'Accessories', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2000&auto=format&fit=crop', description: 'Iconic racing style with certified protection.' },
    { id: '15', name: 'Quad Lock Mount', price: '$69.95', category: 'Accessories', image: 'https://images.unsplash.com/photo-1622185135505-2d795043dfeb?q=80&w=2000&auto=format&fit=crop', description: 'Secure phone mount for navigation on the go.' },
    { id: '16', name: 'Ogio Mach 5 Backpack', price: '$199.95', category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2000&auto=format&fit=crop', description: 'Aerodynamic hardshell backpack for motorcycle riders.' },
];

export default function ShopStoreScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const filteredInventory = INVENTORY.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => setSelectedProduct(item)}
        >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={24} color="#FFF" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.screenContainer}>
                <Text style={GlobalStyles.title}>Shop Store</Text>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color={Colors.textSecondary} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search parts, gear..."
                        placeholderTextColor={Colors.textSecondary}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* Categories */}
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
                        {CATEGORIES.map((category) => (
                            <TouchableOpacity
                                key={category}
                                style={[
                                    styles.categoryChip,
                                    selectedCategory === category && styles.categoryChipSelected
                                ]}
                                onPress={() => setSelectedCategory(category)}
                            >
                                <Text style={[
                                    styles.categoryText,
                                    selectedCategory === category && styles.categoryTextSelected
                                ]}>{category}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <FlatList
                    data={filteredInventory}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </View>

            {/* Product Details Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={!!selectedProduct}
                onRequestClose={() => setSelectedProduct(null)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{selectedProduct?.name}</Text>
                            <TouchableOpacity onPress={() => setSelectedProduct(null)}>
                                <Ionicons name="close-circle" size={32} color={Colors.textSecondary} />
                            </TouchableOpacity>
                        </View>

                        <Image source={{ uri: selectedProduct?.image }} style={styles.modalImage} />

                        <Text style={styles.modalPrice}>{selectedProduct?.price}</Text>
                        <Text style={styles.modalDescription}>{selectedProduct?.description}</Text>

                        <TouchableOpacity style={GlobalStyles.primaryButton}>
                            <Text style={GlobalStyles.primaryButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.surfaceLight,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    searchInput: {
        flex: 1,
        color: Colors.text,
        marginLeft: 12,
        fontSize: 16,
    },
    categoriesScroll: {
        marginBottom: 24,
    },
    categoryChip: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: Colors.surface,
        marginRight: 12,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    categoryChipSelected: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    categoryText: {
        color: Colors.textSecondary,
        fontWeight: '600',
    },
    categoryTextSelected: {
        color: '#FFFFFF',
    },
    productCard: {
        backgroundColor: Colors.surface,
        borderRadius: 16,
        width: '48%',
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.border,
        ...GlobalStyles.shadow,
    },
    productImage: {
        width: '100%',
        height: 140,
        backgroundColor: Colors.surfaceLight,
    },
    productInfo: {
        padding: 12,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
        height: 40, // Fixed height for 2 lines
    },
    productPrice: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    addButton: {
        position: 'absolute',
        bottom: 12,
        right: 12,
        backgroundColor: Colors.primary,
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: Colors.surface,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        minHeight: 400,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        flex: 1,
        marginRight: 16,
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        marginBottom: 24,
    },
    modalPrice: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 8,
    },
    modalDescription: {
        fontSize: 16,
        color: Colors.textSecondary,
        lineHeight: 24,
        marginBottom: 32,
    },
});
