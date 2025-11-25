import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

export default function ProfileScreen() {
    const navigation = useNavigation<any>();

    const handleEditProfile = () => {
        // Navigate to edit profile or show modal
        // navigation.navigate('EditProfile'); 
    };

    return (
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
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: Colors.surfaceLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 16,
        marginTop: 24,
    },
    activeCard: {
        backgroundColor: Colors.surface,
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.primary,
        marginBottom: 24,
        ...GlobalStyles.shadow,
    },
    activeLabel: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 8,
    },
    activeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 4,
    },
    activeDetail: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginBottom: 16,
    },
    activeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    menuItemIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.surfaceLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.text,
        flex: 1,
    },
    shopInfoCard: {
        backgroundColor: Colors.surface,
        borderRadius: 16,
        padding: 20,
        marginTop: 32,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    shopInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 16,
    },
    shopInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    shopInfoText: {
        color: Colors.textSecondary,
        marginLeft: 12,
        fontSize: 14,
    },
    directionsButton: {
        backgroundColor: Colors.surfaceLight,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    directionsButtonText: {
        color: Colors.text,
        fontWeight: '600',
    },
});
