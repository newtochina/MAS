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
                        <Text style={styles.shopName}>Motomatch Garage</Text>
                        <View style={styles.statusBadge}>
                            <View style={styles.statusDot} />
                            <Text style={styles.statusText}>Open Now</Text>
                        </View>
                    </View>
                </View>

                <View style={GlobalStyles.screenContainer}>
                    {/* Quick Actions */}
                    <View style={styles.actionGrid}>
                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('Booking')}
                        >
                            <View style={[styles.iconCircle, { backgroundColor: Colors.primary }]}>
                                <Ionicons name="calendar" size={24} color="#FFF" />
                            </View>
                            <Text style={styles.actionTitle}>Book Service</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.actionCard}
                            onPress={() => navigation.navigate('Visualizer')}
                        >
                            <View style={[styles.iconCircle, { backgroundColor: Colors.accent }]}>
                                <Ionicons name="construct" size={24} color="#000" />
                            </View>
                            <Text style={styles.actionTitle}>Diagnose</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Services Preview */}
                    <Text style={[GlobalStyles.title, { marginTop: 24 }]}>Our Services</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.servicesScroll}>
                        {[
                            { name: 'Full Service', icon: 'build' },
                            { name: 'Tire Change', icon: 'disc' },
                            { name: 'Oil Change', icon: 'water' },
                            { name: 'Dyno Tune', icon: 'speedometer' },
                        ].map((service, index) => (
                            <View key={index} style={styles.serviceCard}>
                                <Ionicons name={service.icon as any} size={32} color={Colors.primary} />
                                <Text style={styles.serviceName}>{service.name}</Text>
                            </View>
                        ))}
                    </ScrollView>

                    {/* My Garage Preview */}
                    <View style={styles.sectionHeader}>
                        <Text style={GlobalStyles.title}>My Garage</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('GarageHome')}>
                            <Text style={{ color: Colors.primary }}>View All</Text>
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

                    {/* Contact Info */}
                    <View style={styles.contactCard}>
                        <Text style={styles.contactTitle}>Visit Us</Text>
                        <View style={styles.contactRow}>
                            <Ionicons name="location" size={20} color={Colors.textSecondary} />
                            <Text style={styles.contactText}>123 Moto Street, Sydney NSW</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Ionicons name="time" size={20} color={Colors.textSecondary} />
                            <Text style={styles.contactText}>Mon-Fri: 8am - 6pm</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Ionicons name="call" size={20} color={Colors.textSecondary} />
                            <Text style={styles.contactText}>(02) 9999 8888</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    hero: {
        height: 250,
        position: 'relative',
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    heroOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    shopName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 8,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 199, 89, 0.2)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#34C759',
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#34C759',
        marginRight: 6,
    },
    statusText: {
        color: '#34C759',
        fontWeight: 'bold',
        fontSize: 12,
    },
    actionGrid: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 20,
    },
    actionCard: {
        flex: 1,
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    iconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    actionTitle: {
        color: Colors.text,
        fontWeight: '600',
        fontSize: 16,
    },
    servicesScroll: {
        marginTop: 12,
        marginHorizontal: -16,
        paddingHorizontal: 16,
    },
    serviceCard: {
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 12,
        marginRight: 12,
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    serviceName: {
        color: Colors.text,
        marginTop: 12,
        textAlign: 'center',
        fontWeight: '500',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 12,
    },
    garageCard: {
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    garageIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    garageTitle: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: 'bold',
    },
    garageSubtitle: {
        color: Colors.textSecondary,
        fontSize: 14,
    },
    contactCard: {
        marginTop: 32,
        backgroundColor: Colors.surface,
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    contactTitle: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    contactText: {
        color: Colors.textSecondary,
        marginLeft: 12,
        fontSize: 16,
    },
});
