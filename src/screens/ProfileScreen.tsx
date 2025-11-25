import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, Linking, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
        <View style={GlobalStyles.container}>
            <ScrollView contentContainerStyle={GlobalStyles.screenContainer}>
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <Ionicons name="person" size={40} color={Colors.primary} />
                    </View>
                    <View>
                        <Text style={styles.userName}>James Smith</Text>
                        <Text style={styles.userEmail}>james.smith@example.com</Text>
                    </View>
                </View>

                {/* Active Appointment Card */}
                <Text style={styles.sectionTitle}>Upcoming</Text>
                <View style={styles.activeCard}>
                    <Text style={styles.activeLabel}>Confirmed Appointment</Text>
                    <Text style={styles.activeTitle}>General Service & Oil Change</Text>
                    <Text style={styles.activeDetail}>Tomorrow, 10:00 AM</Text>
                    
                    <View style={styles.activeRow}>
                        <Ionicons name="location" size={16} color={Colors.textSecondary} />
                        <Text style={[styles.activeDetail, { marginBottom: 0, marginLeft: 6 }]}>Motomatch Garage</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>My Garage</Text>
                <TouchableOpacity 
                    style={styles.menuItem} 
                    onPress={() => navigation.navigate('GarageHome')}
                >
                    <View style={styles.menuItemIcon}>
                        <Ionicons name="bicycle" size={20} color={Colors.primary} />
                    </View>
                    <Text style={styles.menuItemText}>My Bikes (2)</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuItemIcon}>
                        <Ionicons name="receipt" size={20} color={Colors.primary} />
                    </View>
                    <Text style={styles.menuItemText}>Order History</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Account</Text>
                <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile}>
                    <View style={styles.menuItemIcon}>
                        <Ionicons name="settings" size={20} color={Colors.textSecondary} />
                    </View>
                    <Text style={styles.menuItemText}>Settings</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
                </TouchableOpacity>

                <View style={styles.shopInfoCard}>
                    <Text style={styles.shopInfoTitle}>Motomatch Garage</Text>
                    <View style={styles.shopInfoRow}>
                        <Ionicons name="location" size={20} color={Colors.textSecondary} />
                        <Text style={styles.shopInfoText}>123 O'Riordan St, Alexandria NSW 2015</Text>
                    </View>
                    <View style={styles.shopInfoRow}>
                        <Ionicons name="time" size={20} color={Colors.textSecondary} />
                        <Text style={styles.shopInfoText}>Mon-Fri: 8am - 6pm</Text>
                    </View>
                    <View style={styles.shopInfoRow}>
                        <Ionicons name="call" size={20} color={Colors.textSecondary} />
                        <Text style={styles.shopInfoText}>(02) 9999 8888</Text>
                    </View>
                    <TouchableOpacity style={styles.directionsButton} onPress={() => {
                        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
                        const latLng = `-33.8967,151.1926`;
                        const label = 'Motomatch Garage';
                        const url = Platform.select({
                            ios: `${scheme}${label}@${latLng}`,
                            android: `${scheme}${latLng}(${label})`
                        });
                        if (url) {
                            Linking.openURL(url);
                        }
                    }}>
                        <Text style={styles.directionsButtonText}>Get Directions</Text>
                    </TouchableOpacity>
                </View>
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
            </View >
        </ScrollView >
    );
}


