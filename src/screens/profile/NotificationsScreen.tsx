import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GlobalStyles } from '../../constants/Styles';

const MOCK_NOTIFICATIONS = [
    { id: '1', title: 'Service Due', message: 'Your Ducati Panigale V4 is due for service.', time: '2h ago', read: false },
    { id: '2', title: 'New Parts', message: 'New Akrapovič exhausts available for your bike.', time: '1d ago', read: true },
    { id: '3', title: 'Group Ride', message: 'Sunday Morning Ride starts at 8 AM.', time: '2d ago', read: true },
];

export default function NotificationsScreen() {
    const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

    const renderItem = ({ item }: { item: any }) => (
        <View style={[styles.notificationCard, !item.read && styles.unreadCard]}>
            <View style={styles.iconContainer}>
                <Ionicons
                    name={item.read ? "notifications-outline" : "notifications"}
                    size={24}
                    color={item.read ? Colors.textSecondary : Colors.primary}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={GlobalStyles.screenContainer}
                ListHeaderComponent={() => (
                    <View style={styles.header}>
                        <Text style={GlobalStyles.subtitle}>Recent</Text>
                        <TouchableOpacity onPress={() => setNotifications([])}>
                            <Text style={styles.clearText}>Clear All</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyState}>
                        <Ionicons name="notifications-off-outline" size={48} color={Colors.textSecondary} />
                        <Text style={styles.emptyText}>No notifications</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    clearText: {
        color: Colors.primary,
        fontSize: 14,
    },
    notificationCard: {
        flexDirection: 'row',
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    unreadCard: {
        borderColor: Colors.primary,
        backgroundColor: '#1a0505', // Very subtle red tint
    },
    iconContainer: {
        marginRight: 16,
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    message: {
        color: Colors.textSecondary,
        fontSize: 14,
        marginBottom: 8,
    },
    time: {
        color: Colors.textSecondary,
        fontSize: 12,
    },
    emptyState: {
        alignItems: 'center',
        marginTop: 60,
    },
    emptyText: {
        color: Colors.textSecondary,
        marginTop: 16,
        fontSize: 16,
    },
});
