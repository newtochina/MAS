import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

// Calibrated hotspots for a side-view sportbike image
const HOTSPOTS = [
    { id: '1', name: 'Front Wheel', x: 74, y: 68, category: { id: 'wheels', name: 'Wheels & Tires' } },
    { id: '2', name: 'Rear Wheel', x: 22, y: 68, category: { id: 'wheels', name: 'Wheels & Tires' } },
    { id: '3', name: 'Engine', x: 52, y: 62, category: { id: 'engine', name: 'Engine' } },
    { id: '4', name: 'Exhaust', x: 30, y: 75, category: { id: 'exhaust', name: 'Exhaust' } },
    { id: '5', name: 'Seat', x: 38, y: 45, category: { id: 'body', name: 'Bodywork' } },
    { id: '6', name: 'Handlebars', x: 68, y: 38, category: { id: 'controls', name: 'Controls' } },
    { id: '7', name: 'Front Brakes', x: 72, y: 68, category: { id: 'brakes', name: 'Brakes' } },
];

export default function VisualizerScreen() {
    const navigation = useNavigation<any>();
    const [selectedPart, setSelectedPart] = useState<any>(null);

    const handleHotspotPress = (hotspot: any) => {
        setSelectedPart(hotspot);
    };

    const navigateToCategory = () => {
        if (selectedPart) {
            navigation.navigate('PartBrands', { category: selectedPart.category });
            setSelectedPart(null);
        }
    };

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.instructionText}>Tap a part to find upgrades</Text>

                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=3270&auto=format&fit=crop' }}
                        style={styles.bikeImage}
                        resizeMode="contain"
                    />

                    {HOTSPOTS.map((hotspot) => (
                        <TouchableOpacity
                            key={hotspot.id}
                            style={[
                                styles.hotspot,
                                {
                                    left: `${hotspot.x}%`,
                                    top: `${hotspot.y}%`,
                                },
                            ]}
                            onPress={() => handleHotspotPress(hotspot)}
                        >
                            <View style={styles.hotspotDot} />
                            <View style={styles.hotspotRing} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Selection Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={!!selectedPart}
                onRequestClose={() => setSelectedPart(null)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{selectedPart?.name}</Text>
                            <TouchableOpacity onPress={() => setSelectedPart(null)}>
                                <Ionicons name="close" size={24} color={Colors.text} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalDescription}>
                            Find parts and upgrades for your {selectedPart?.name.toLowerCase()}.
                        </Text>

                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={navigateToCategory}
                        >
                            <Text style={styles.primaryButtonText}>View {selectedPart?.category.name}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructionText: {
        fontSize: 16,
        color: Colors.textSecondary,
        marginBottom: 20,
    },
    imageContainer: {
        width: Dimensions.get('window').width - 32,
        height: 300,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bikeImage: {
        width: '100%',
        height: '100%',
    },
    hotspot: {
        position: 'absolute',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -20, // Center the hotspot
        marginTop: -20,
    },
    hotspotDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.primary,
        zIndex: 2,
    },
    hotspotRing: {
        position: 'absolute',
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.primary,
        opacity: 0.3,
        zIndex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: Colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        minHeight: 200,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
    },
    modalDescription: {
        fontSize: 16,
        color: Colors.textSecondary,
        marginBottom: 20,
    },
    primaryButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
