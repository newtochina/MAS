import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Animated, Easing, Image, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
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
    const { width } = useWindowDimensions();
    const [selectedPart, setSelectedPart] = useState<any>(null);
    const [scanLine] = useState(new Animated.Value(0));

    useEffect(() => {
        let animation: Animated.CompositeAnimation | null = null;

        const startScan = () => {
            scanLine.setValue(0);
            animation = Animated.loop(
                Animated.sequence([
                    Animated.timing(scanLine, {
                        toValue: 1,
                        duration: 3000,
                        easing: Easing.linear,
                        useNativeDriver: false,
                    }),
                    Animated.delay(1000)
                ])
            );
            animation.start();
        };
        startScan();

        return () => {
            if (animation) {
                animation.stop();
            }
        };
    }, []);

    const scanTranslateY = scanLine.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 300] // Height of image container
    });

    const handleHotspotPress = (hotspot: any) => {
        setSelectedPart(hotspot);
    };

    const navigateToCategory = () => {
        if (selectedPart) {
            navigation.navigate('Store'); // Navigate to Store tab first
            // In a real app, we'd pass params to filter the store, but for now just getting to the store is good.
            setSelectedPart(null);
        }
    };

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.headerOverlay}>
                    <Text style={styles.headerTitle}>AI DIAGNOSTIC</Text>
                    <Text style={styles.headerSubtitle}>Scanning vehicle systems...</Text>
                </View>

                <View style={[styles.imageContainer, { width }]}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=3270&auto=format&fit=crop' }}
                        style={styles.bikeImage}
                        resizeMode="contain"
                    />

                    {/* Scanning Line Effect */}
                    <Animated.View
                        style={[
                            styles.scanLine,
                            {
                                top: scanTranslateY,
                                opacity: 0.7
                            }
                        ]}
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

                <Text style={styles.instructionText}>Tap a highlighted component to analyze</Text>
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
                            <View>
                                <Text style={styles.modalTitle}>{selectedPart?.name}</Text>
                                <Text style={styles.modalSubtitle}>Component Detected</Text>
                            </View>
                            <TouchableOpacity onPress={() => setSelectedPart(null)} style={styles.closeButton}>
                                <Ionicons name="close" size={24} color={Colors.text} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.analysisBox}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.primary} />
                            <Text style={styles.analysisText}>Compatible upgrades available</Text>
                        </View>

                        <Text style={styles.modalDescription}>
                            Browse premium {selectedPart?.category.name.toLowerCase()} compatible with your Ducati Panigale V4.
                        </Text>

                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={navigateToCategory}
                        >
                            <Text style={styles.primaryButtonText}>View Upgrades</Text>
                            <Ionicons name="arrow-forward" size={20} color="#FFF" />
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
        backgroundColor: '#000',
    },
    headerOverlay: {
        position: 'absolute',
        top: 40,
        alignItems: 'center',
        zIndex: 10,
    },
    headerTitle: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    headerSubtitle: {
        color: Colors.textSecondary,
        fontSize: 12,
        marginTop: 4,
    },
    instructionText: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginTop: 40,
        letterSpacing: 1,
    },
    imageContainer: {
        height: 300,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bikeImage: {
        width: '100%',
        height: '100%',
    },
    scanLine: {
        position: 'absolute',
        width: '100%',
        height: 2,
        backgroundColor: Colors.primary,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        zIndex: 5,
    },
    hotspot: {
        position: 'absolute',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -20,
        marginTop: -20,
    },
    hotspotDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: Colors.primary,
        zIndex: 2,
        borderWidth: 2,
        borderColor: '#FFF',
    },
    hotspotRing: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: Colors.primary,
        opacity: 0.3,
        zIndex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: Colors.surface,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        minHeight: 280,
        borderTopWidth: 1,
        borderTopColor: Colors.primary,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
    },
    modalSubtitle: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: '600',
        marginTop: 4,
        textTransform: 'uppercase',
    },
    closeButton: {
        padding: 4,
        backgroundColor: Colors.surfaceLight,
        borderRadius: 20,
    },
    analysisBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 199, 89, 0.1)',
        padding: 12,
        borderRadius: 12,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(52, 199, 89, 0.3)',
    },
    analysisText: {
        color: '#34C759',
        marginLeft: 8,
        fontWeight: '600',
    },
    modalDescription: {
        fontSize: 16,
        color: Colors.textSecondary,
        marginBottom: 24,
        lineHeight: 24,
    },
    primaryButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        ...GlobalStyles.shadow,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
