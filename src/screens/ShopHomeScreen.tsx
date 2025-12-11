import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

const SERVICES = [
    { name: 'Full Service', icon: 'build-outline', price: 'fr. $250' },
    { name: 'Tire Change', icon: 'disc-outline', price: 'fr. $80' },
    { name: 'Oil Change', icon: 'water-outline', price: 'fr. $120' },
    { name: 'Dyno Tune', icon: 'speedometer-outline', price: 'fr. $300' },
] as const;

export default function ShopHomeScreen() {
    const navigation = useNavigation<any>();
    const { width } = useWindowDimensions();

    return (
        <View style={GlobalStyles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
                {/* Hero Section */}
                <View style={styles.hero}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop' }}
                        style={styles.heroImage}
                    />
                    <View style={styles.heroOverlay}>
                        <View style={styles.heroContent}>
                            <View style={styles.awardBadge}>
                                <Text style={styles.awardYear}>2025</Text>
                                <Text style={styles.awardTitle}>CYCLE WORLD</Text>
                                <Text style={styles.awardSubtitle}>10 BEST</Text>
                            </View>

                            <Text style={styles.heroTitle}>The best of Cycle{'\n'}World&apos;s Ten Best</Text>
                            <Text style={styles.heroDescription}>
                                Gold Wing Tour DCT — Best Touring Bike; CB750 Hornet — Best Middleweight Streetbike; CRF450RWE — Best Motocrosser.
                            </Text>

                            <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate('Visualizer')}>
                                <Text style={styles.heroButtonText}>Meet the winners</Text>
                                <Ionicons name="arrow-forward" size={16} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Diagonal Slice */}
                    <View style={styles.diagonalWrapper}>
                        <View style={styles.diagonalSlice} />
                    </View>
                </View>

                {/* Main Content Area - Overlapping or below diagonal */}
                <View style={[GlobalStyles.screenContainer, styles.mainContent]}>

                    {/* Action Bar */}
                    <View style={styles.actionBar}>
                        <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('Visualizer')}>
                            <Text style={styles.actionText}>Find & Compare</Text>
                            <Ionicons name="swap-horizontal" size={16} color={Colors.primary} />
                        </TouchableOpacity>

                        <View style={styles.actionDivider} />

                        <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('Store')}>
                            <Text style={styles.actionText}>Search Inventory</Text>
                            <Ionicons name="search" size={16} color={Colors.primary} />
                        </TouchableOpacity>

                        <View style={styles.actionDivider} />

                        <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('Booking')}>
                            <Text style={styles.actionText}>Current Offers</Text>
                            <Ionicons name="pricetag" size={16} color={Colors.primary} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dealerButton} onPress={() => navigation.navigate('Map')}>
                            <Text style={styles.dealerButtonText}>Find a Dealer</Text>
                            <Ionicons name="arrow-forward" size={16} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    {/* Compact Trust Signals */}
                    <View style={styles.trustSignalsBar}>
                        <View style={styles.trustItemCompact}>
                            <Ionicons name="shield-checkmark" size={16} color={Colors.textSecondary} />
                            <Text style={styles.trustTextCompact}>Certified Service</Text>
                        </View>
                        <View style={styles.trustSeparator} />
                        <View style={styles.trustItemCompact}>
                            <Ionicons name="trophy" size={16} color={Colors.textSecondary} />
                            <Text style={styles.trustTextCompact}>Award Winning</Text>
                        </View>
                        <View style={styles.trustSeparator} />
                        <View style={styles.trustItemCompact}>
                            <Ionicons name="star" size={16} color={Colors.textSecondary} />
                            <Text style={styles.trustTextCompact}>4.9/5 Rating</Text>
                        </View>
                    </View>

                    {/* Popular Services Grid */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Popular Services</Text>
                    </View>

                    <View style={styles.gridContainer}>
                        {SERVICES.map((service, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.gridItem, { width: (width - 40 - 12) / 2 }]}
                                onPress={() => navigation.navigate('Booking')}
                            >
                                <Ionicons name={service.icon as any} size={28} color={Colors.primary} style={{ marginBottom: 12 }} />
                                <Text style={styles.gridTitle}>{service.name}</Text>
                                <Text style={styles.gridSubtitle}>{service.price}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* My Garage Promo */}
                    <View style={styles.promoCard}>
                        <View style={styles.promoContent}>
                            <Text style={styles.promoTitle}>My Garage</Text>
                            <Text style={styles.promoText}>Track service history, upcoming maintenance, and manage your bike specs all in one place.</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('GarageHome')}>
                                <Text style={{ color: Colors.primary, fontWeight: '700', marginTop: 8 }}>Manage Vehicles</Text>
                            </TouchableOpacity>
                        </View>
                        <Ionicons name="bicycle" size={60} color={Colors.surfaceLight} style={styles.promoIcon} />
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    hero: {
        height: 500, // Taller hero
        position: 'relative',
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    heroImage: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
    heroOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 24,
        paddingTop: 60,
    },
    heroContent: {
        flex: 1,
        maxWidth: 320,
    },
    awardBadge: {
        marginBottom: 24,
    },
    awardYear: {
        color: '#FFF',
        fontSize: 48,
        fontWeight: '900',
        lineHeight: 48,
    },
    awardTitle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 2,
    },
    awardSubtitle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: 1,
    },
    heroTitle: {
        fontSize: 36,
        fontWeight: '800',
        color: '#FFF',
        marginBottom: 16,
        lineHeight: 40,
    },
    heroDescription: {
        fontSize: 14,
        color: '#EEE',
        lineHeight: 20,
        marginBottom: 32,
        fontWeight: '500',
    },
    heroButton: {
        borderColor: '#FFF',
        borderWidth: 1.5,
        paddingHorizontal: 24,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: 8,
    },
    heroButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    // Diagonal styling
    diagonalWrapper: {
        position: 'absolute',
        bottom: -50,
        left: 0,
        right: 0,
        height: 100,
        zIndex: 1,
    },
    diagonalSlice: {
        backgroundColor: Colors.background,
        height: 200,
        width: '120%',
        position: 'absolute',
        top: 0,
        left: -20,
        transform: [{ rotate: '-3deg' }], // Slight diagonal
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
    },
    mainContent: {
        paddingTop: 0,
        zIndex: 2,
        marginTop: 0, // Content starts after diagonal
    },
    actionBar: {
        flexDirection: 'row',
        backgroundColor: Colors.surface,
        borderRadius: 4, // Sharp corners like Honda? or slight radius
        padding: 0,
        marginBottom: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
        overflow: 'hidden',
        marginTop: -30, // Pull up to overlap slightly if needed, or just sit nicely
    },
    actionItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8,
        gap: 6,
    },
    actionText: {
        color: Colors.primary, // Red text
        fontSize: 11,
        fontWeight: '700',
        textAlign: 'center',
    },
    actionDivider: {
        width: 1,
        height: 24,
        backgroundColor: Colors.border,
    },
    dealerButton: {
        backgroundColor: Colors.primary,
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8,
        gap: 6,
    },
    dealerButtonText: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: '700',
    },
    // Trust Signals
    trustSignalsBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        marginBottom: 32,
    },
    trustItemCompact: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    trustTextCompact: {
        color: Colors.textSecondary,
        fontSize: 12,
        fontWeight: '500',
    },
    trustSeparator: {
        width: 1,
        height: 12,
        backgroundColor: Colors.border,
        marginHorizontal: 16,
    },
    sectionHeader: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.text,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 32,
    },
    gridItem: {
        // Width handled inline for simpler responsiveness
        backgroundColor: Colors.surface,
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    gridTitle: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 4,
    },
    gridSubtitle: {
        color: Colors.textSecondary,
        fontSize: 12,
    },
    promoCard: {
        backgroundColor: Colors.surface,
        borderRadius: 8,
        padding: 24,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.border,
        overflow: 'hidden',
    },
    promoContent: {
        flex: 1,
        paddingRight: 16,
        zIndex: 1,
    },
    promoTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
    },
    promoText: {
        color: Colors.textSecondary,
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 12,
    },
    promoIcon: {
        position: 'absolute',
        right: -10,
        bottom: -10,
        opacity: 0.1,
        transform: [{ scale: 2 }],
    },
});
