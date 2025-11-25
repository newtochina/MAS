import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

export default function ShopHomeScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={GlobalStyles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                {/* Hero Section */}
                <View style={styles.hero}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop' }}
                        style={styles.heroImage}
                    />
                    <View style={styles.heroOverlay}>
                        <View style={styles.statusBadge}>
                            <View style={styles.statusDot} />
                            <Text style={styles.statusText}>Open Now • Closes 6PM</Text>
                        </View>
                        <Text style={styles.shopName}>Motomatch Garage</Text>
                        <Text style={styles.tagline}>Premium Motorcycle Care & Performance</Text>
                    </View>
                </View>

                <View style={GlobalStyles.screenContainer}>
                    {/* Trust Signals */}
                    <View style={styles.trustSignals}>
                        <View style={styles.trustItem}>
                            <Ionicons name="shield-checkmark" size={24} color={Colors.accent} />
                            <Text style={styles.trustText}>Certified</Text>
                        </View>
                        <View style={styles.trustItem}>
                            <Ionicons name="trophy" size={24} color={Colors.accent} />
                            <Text style={styles.trustText}>Award Winning</Text>
                        </View>
                        <View style={styles.trustItem}>
                            <Ionicons name="star" size={24} color={Colors.accent} />
                            <Text style={styles.trustText}>4.9/5 Rating</Text>
                        </View>
                    </View>

                    {/* Quick Actions */}
                    <View style={styles.actionGrid}>
                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('Booking')}
                        >
                            <View style={[styles.iconCircle, { backgroundColor: Colors.primary }]}>
                                <Ionicons name="calendar" size={28} color="#FFF" />
                            </View>
                            <Text style={styles.actionTitle}>Book Service</Text>
                            <Text style={styles.actionSubtitle}>Schedule a visit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('Visualizer')}
                        >
                            <View style={[styles.iconCircle, { backgroundColor: Colors.surfaceLight }]}>
                                <Ionicons name="construct" size={28} color={Colors.primary} />
                            </View>
                            <Text style={styles.actionTitle}>Diagnose</Text>
                            <Text style={styles.actionSubtitle}>Identify issues</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Services Preview */}
                    <View style={styles.sectionHeader}>
                        <Text style={GlobalStyles.title}>Our Services</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                            <Text style={{ color: Colors.primary, fontWeight: '600' }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesScroll}>
                        {[
                            { name: 'Full Service', icon: 'build', price: 'fr. $250' },
                            { name: 'Tire Change', icon: 'disc', price: 'fr. $80' },
                            { name: 'Oil Change', icon: 'water', price: 'fr. $120' },
                            { name: 'Dyno Tune', icon: 'speedometer', price: 'fr. $300' },
                        ].map((service, index) => (
                            <View key={index} style={styles.serviceCard}>
                                <Ionicons name={service.icon as any} size={32} color={Colors.primary} />
                                <Text style={styles.serviceName}>{service.name}</Text>
                                <Text style={styles.servicePrice}>{service.price}</Text>
                            </View>
                        ))}
                    </ScrollView>

                    {/* My Garage Preview */}
                    <View style={styles.sectionHeader}>
                        <Text style={GlobalStyles.title}>My Garage</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('GarageHome')}>
                            <Text style={{ color: Colors.primary, fontWeight: '600' }}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.garageCard}
                        onPress={() => navigation.navigate('GarageHome')}
                    >
                        <View style={styles.garageIcon}>
                            <Ionicons name="bicycle" size={24} color={Colors.text} />
                        </View>
                        <View>
                            <Text style={styles.garageTitle}>Manage Your Bikes</Text>
                            <Text style={styles.garageSubtitle}>Track service history & specs</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} style={{ marginLeft: 'auto' }} />
                    </TouchableOpacity>

                    {/* Testimonials */}
                    <Text style={[GlobalStyles.title, { marginTop: 32 }]}>Happy Riders</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesScroll}>
                        {[
                            { text: "Best mechanic in town. My Ducati runs smoother than ever!", author: "James S." },
                            { text: "Super fast turnaround and great prices. Highly recommend!", author: "Sarah L." },
                            { text: "The team really knows their stuff. Fixed my electrical issue in no time.", author: "Mike T." },
                        ].map((item, index) => (
                            <View key={index} style={styles.testimonialCard}>
                                <Text style={styles.testimonialText}>"{item.text}"</Text>
                                <View style={styles.testimonialAuthor}>
                                    <Ionicons name="person-circle" size={20} color={Colors.textSecondary} />
                                    <Text style={styles.authorName}>{item.author}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    hero: {
        height: 350,
        position: 'relative',
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.3)', // Base dim
    },
    heroGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        // Simulating linear gradient with background color for now as we don't have expo-linear-gradient
        backgroundColor: 'rgba(15,15,15,0.9)',
    },
    shopName: {
        fontSize: 36,
        fontWeight: '800',
        color: '#FFF',
        marginBottom: 8,
        letterSpacing: -1,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    tagline: {
        fontSize: 16,
        color: '#E0E0E0',
        marginBottom: 16,
        fontWeight: '500',
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 199, 89, 0.2)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#34C759',
        marginBottom: 24,
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#34C759',
        marginRight: 8,
        shadowColor: '#34C759',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    statusText: {
        color: '#34C759',
        fontWeight: 'bold',
        fontSize: 13,
    },
    trustSignals: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        marginBottom: 20,
    },
    trustItem: {
        alignItems: 'center',
        gap: 8,
    },
    trustText: {
        color: Colors.textSecondary,
        fontSize: 12,
        fontWeight: '600',
    },
    actionGrid: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 32,
    },
    actionCard: {
        flex: 1,
        backgroundColor: Colors.surface,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
        ...GlobalStyles.shadow,
    },
    iconCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    actionTitle: {
        color: Colors.text,
        fontWeight: '700',
        fontSize: 16,
    },
    actionSubtitle: {
        color: Colors.textSecondary,
        fontSize: 12,
        marginTop: 4,
    },
    servicesScroll: {
        marginHorizontal: -20,
        paddingHorizontal: 20,
        marginBottom: 32,
    },
    serviceCard: {
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 16,
        marginRight: 16,
        width: 140,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    serviceName: {
        color: Colors.text,
        marginTop: 16,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
    },
    servicePrice: {
        color: Colors.primary,
        marginTop: 4,
        fontWeight: 'bold',
        fontSize: 12,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    garageCard: {
        backgroundColor: Colors.surface,
        padding: 20,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
        ...GlobalStyles.shadow,
    },
    garageIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.surfaceLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    garageTitle: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    garageSubtitle: {
        color: Colors.textSecondary,
        fontSize: 14,
    },
    testimonialCard: {
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 16,
        marginRight: 16,
        width: 280,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    testimonialText: {
        color: Colors.text,
        fontSize: 14,
        fontStyle: 'italic',
        lineHeight: 20,
        marginBottom: 12,
    },
    testimonialAuthor: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    authorName: {
        color: Colors.textSecondary,
        fontSize: 12,
        fontWeight: '600',
    },
});
