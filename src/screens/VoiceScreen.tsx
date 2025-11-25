import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

const ROOMS = [
    {
        id: '1',
        name: 'Ducati Owners Club',
        participants: 12,
        active: true,
    },
    {
        id: '2',
        name: 'Track Day Prep',
        participants: 5,
        active: true,
    },
    {
        id: '3',
        name: 'Sunday Ride Planning',
        participants: 28,
        active: true,
    },
    {
        id: '4',
        name: 'Mechanic Talk',
        participants: 8,
        active: false,
    },
];

export default function VoiceScreen() {
    const renderRoom = ({ item }: { item: any }) => (
        <TouchableOpacity style={GlobalStyles.card}>
            <View style={styles.roomHeader}>
                <Text style={styles.roomName}>{item.name}</Text>
                {item.active && (
                    <View style={styles.liveBadge}>
                        <Text style={styles.liveText}>LIVE</Text>
                    </View>
                )}
            </View>
            <View style={styles.roomFooter}>
                <View style={styles.participants}>
                    <Ionicons name="people" size={16} color={Colors.textSecondary} />
                    <Text style={styles.participantsText}>{item.participants} listening</Text>
                </View>
                <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.joinButtonText}>Join Room</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={GlobalStyles.container}>
            <FlatList
                data={ROOMS}
                renderItem={renderRoom}
                keyExtractor={(item) => item.id}
                contentContainerStyle={GlobalStyles.screenContainer}
                ListHeaderComponent={() => (
                    <View style={styles.header}>
                        <Text style={GlobalStyles.title}>Voice Rooms</Text>
                        <Text style={GlobalStyles.subtitle}>Join the conversation</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.createButton}>
                <Ionicons name="add" size={30} color={Colors.text} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
    },
    roomHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    roomName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
    },
    liveBadge: {
        backgroundColor: Colors.error,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    liveText: {
        color: Colors.text,
        fontSize: 10,
        fontWeight: 'bold',
    },
    roomFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    participants: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    participantsText: {
        color: Colors.textSecondary,
        fontSize: 14,
    },
    joinButton: {
        backgroundColor: Colors.surface,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    joinButtonText: {
        color: Colors.primary,
        fontWeight: '600',
    },
    createButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        ...GlobalStyles.shadow,
    },
});
