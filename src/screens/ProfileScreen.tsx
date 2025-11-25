import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

// Mock data for My Garage quick view
const MY_BIKES = [
    { id: '1', name: 'Ducati Panigale V4', year: 2023, image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=3270&auto=format&fit=crop' },
    { id: '2', name: 'Yamaha R1', year: 2022, image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=3270&auto=format&fit=crop' },
];

export default function ProfileScreen() {
    const navigation = useNavigation();

    const handleEditProfile = () => navigation.navigate('EditProfile');
    const handleNotifications = () => navigation.navigate('Notifications');
    const handlePrivacy = () => navigation.navigate('Privacy');
    const handleLogout = () => Alert.alert('Log Out', 'Are you sure you want to log out?', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', style: 'destructive', onPress: () => console.log('Logged out') }
    ]);

    return (
        <ScrollView style={GlobalStyles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop' }}
                    style={styles.avatar}
                />
                <View style={styles.nameRow}>
                    <Text style={styles.name}>Rork</Text>
                    <View style={styles.proBadge}>
                        <Text style={styles.proText}>PRO</Text>
                    </View>
                </View>
                <Text style={styles.bio}>Ducati Enthusiast | Track Day Junkie</Text>

                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>12</Text>
                        <Text style={styles.statLabel}>Rides</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>3</Text>
                        <Text style={styles.statLabel}>Bikes</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>1.2k</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                </View>
            </View>

            <View style={GlobalStyles.screenContainer}>
                <Text style={GlobalStyles.subtitle}>My Garage</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.garageScroll}>
                    {MY_BIKES.map(bike => (
                        <TouchableOpacity
                            key={bike.id}
                            style={styles.miniBikeCard}
                            onPress={() => navigation.navigate('Garage', { screen: 'BikeDetails', params: { bike } })}
                        >
                            <Image source={{ uri: bike.image }} style={styles.miniBikeImage} />
                            <Text style={styles.miniBikeName} numberOfLines={1}>{bike.name}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        style={styles.addBikeMini}
                        onPress={() => navigation.navigate('Garage', { screen: 'AddBike' })}
                    >
                        <Ionicons name="add" size={24} color={Colors.textSecondary} />
                    </TouchableOpacity>
                </ScrollView>

                <Text style={[GlobalStyles.subtitle, { marginTop: 24 }]}>Settings</Text>

                <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile}>
                    <View style={styles.menuItemLeft}>
                        <Ionicons name="person-outline" size={24} color={Colors.text} />
                        <Text style={styles.menuItemText}>Edit Profile</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={handleNotifications}>
                    <View style={styles.menuItemLeft}>
                        <Ionicons name="notifications-outline" size={24} color={Colors.text} />
                        <Text style={styles.menuItemText}>Notifications</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={handlePrivacy}>
                    <View style={styles.menuItemLeft}>
                        <Ionicons name="shield-checkmark-outline" size={24} color={Colors.text} />
                        <Text style={styles.menuItemText}>Privacy & Security</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]} onPress={handleLogout}>
                    <View style={styles.menuItemLeft}>
                        <Ionicons name="log-out-outline" size={24} color={Colors.error} />
                        <Text style={[styles.menuItemText, { color: Colors.error }]}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingVertical: 32,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 4,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
    },
    proBadge: {
        backgroundColor: Colors.accent,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    proText: {
        color: Colors.background,
        fontWeight: 'bold',
        fontSize: 12,
    },
    bio: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginBottom: 24,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 40,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
    },
    statLabel: {
        fontSize: 12,
        color: Colors.textSecondary,
    },
    garageScroll: {
        marginBottom: 8,
    },
    miniBikeCard: {
        marginRight: 12,
        width: 120,
    },
    miniBikeImage: {
        width: 120,
        height: 80,
        borderRadius: 8,
        marginBottom: 4,
    },
    miniBikeName: {
        color: Colors.text,
        fontSize: 12,
        fontWeight: '600',
    },
    addBikeMini: {
        width: 120,
        height: 80,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.border,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    menuItemText: {
        fontSize: 16,
        color: Colors.text,
    },
});
