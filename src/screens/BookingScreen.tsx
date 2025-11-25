import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

const SERVICES = [
    { id: '1', name: 'General Service', price: 250, icon: 'construct' },
    { id: '2', name: 'Oil Change', price: 120, icon: 'water' },
    { id: '3', name: 'Tire Change', price: 80, icon: 'disc' },
    { id: '4', name: 'Brake Check', price: 60, icon: 'hand-left' },
    { id: '5', name: 'Diagnostics', price: 150, icon: 'pulse' },
    { id: '6', name: 'Chain Lube', price: 40, icon: 'link' },
];

// Generate next 7 days
const DATES = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
        id: i.toString(),
        day: d.toLocaleDateString('en-US', { weekday: 'short' }),
        date: d.getDate(),
        fullDate: d.toISOString(),
    };
});

export default function BookingScreen() {
    const navigation = useNavigation();
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    const [selectedDateId, setSelectedDateId] = useState<string | null>(null);
    const [notes, setNotes] = useState('');

    const selectedService = SERVICES.find(s => s.id === selectedServiceId);

    const handleBook = () => {
        if (!selectedServiceId || !selectedDateId) {
            Alert.alert('Incomplete', 'Please select a service and a date.');
            return;
        }
        Alert.alert('Booking Confirmed', `Your ${selectedService?.name} is scheduled!`, [
            { text: 'Awesome', onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <View style={GlobalStyles.container}>
            <ScrollView contentContainerStyle={GlobalStyles.screenContainer}>
                <Text style={GlobalStyles.title}>Book Service</Text>

                <Text style={GlobalStyles.subtitle}>Select Service</Text>
                <View style={styles.servicesGrid}>
                    {SERVICES.map((service) => (
                        <TouchableOpacity
                            key={service.id}
                            style={[
                                styles.serviceCard,
                                selectedServiceId === service.id && styles.serviceCardSelected
                            ]}
                            onPress={() => setSelectedServiceId(service.id)}
                        >
                            <View style={[
                                styles.serviceIconContainer,
                                selectedServiceId === service.id && styles.serviceIconContainerSelected
                            ]}>
                                <Ionicons
                                    name={service.icon as any}
                                    size={24}
                                    color={selectedServiceId === service.id ? '#FFF' : Colors.primary}
                                />
                            </View>
                            <Text style={[
                                styles.serviceName,
                                selectedServiceId === service.id && styles.serviceTextSelected
                            ]}>{service.name}</Text>
                            <Text style={[
                                styles.servicePrice,
                                selectedServiceId === service.id && styles.serviceTextSelected
                            ]}>${service.price}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={[GlobalStyles.subtitle, { marginTop: 32 }]}>Select Date</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
                    {DATES.map((date) => (
                        <TouchableOpacity
                            key={date.id}
                            style={[
                                styles.dateCard,
                                selectedDateId === date.id && styles.dateCardSelected
                            ]}
                            onPress={() => setSelectedDateId(date.id)}
                        >
                            <Text style={[
                                styles.dayText,
                                selectedDateId === date.id && styles.dateTextSelected
                            ]}>{date.day}</Text>
                            <Text style={[
                                styles.dateText,
                                selectedDateId === date.id && styles.dateTextSelected
                            ]}>{date.date}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={[GlobalStyles.subtitle, { marginTop: 32 }]}>Notes</Text>
                <TextInput
                    style={[GlobalStyles.input, { height: 100, textAlignVertical: 'top' }]}
                    placeholder="Any specific issues or requests?"
                    placeholderTextColor={Colors.textSecondary}
                    value={notes}
                    onChangeText={setNotes}
                    multiline
                    numberOfLines={4}
                />

                {selectedService && (
                    <View style={styles.summaryCard}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Service</Text>
                            <Text style={styles.summaryValue}>{selectedService.name}</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Date</Text>
                            <Text style={styles.summaryValue}>
                                {DATES.find(d => d.id === selectedDateId)?.day} {DATES.find(d => d.id === selectedDateId)?.date}
                            </Text>
                        </View>
                        <View style={[styles.summaryRow, styles.totalRow]}>
                            <Text style={styles.totalLabel}>Total Estimated</Text>
                            <Text style={styles.totalValue}>${selectedService.price}</Text>
                        </View>
                    </View>
                )}

                <TouchableOpacity
                    style={[GlobalStyles.primaryButton, { marginTop: 32, marginBottom: 40, opacity: (!selectedServiceId || !selectedDateId) ? 0.5 : 1 }]}
                    onPress={handleBook}
                    disabled={!selectedServiceId || !selectedDateId}
                >
                    <Text style={GlobalStyles.primaryButtonText}>Confirm Booking</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    servicesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    serviceCard: {
        width: '48%',
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
    },
    serviceCardSelected: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        transform: [{ scale: 1.02 }],
    },
    serviceIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.surfaceLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    serviceIconContainerSelected: {
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    serviceName: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.text,
        textAlign: 'center',
        marginBottom: 4,
    },
    servicePrice: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    serviceTextSelected: {
        color: '#FFFFFF',
    },
    dateScroll: {
        marginHorizontal: -20,
        paddingHorizontal: 20,
    },
    dateCard: {
        backgroundColor: Colors.surface,
        width: 70,
        height: 90,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    dateCardSelected: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    dayText: {
        color: Colors.textSecondary,
        fontSize: 14,
        marginBottom: 4,
    },
    dateText: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    dateTextSelected: {
        color: '#FFFFFF',
    },
    summaryCard: {
        backgroundColor: Colors.surface,
        borderRadius: 16,
        padding: 20,
        marginTop: 24,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        color: Colors.textSecondary,
        fontSize: 16,
    },
    summaryValue: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: '600',
    },
    totalRow: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
    totalLabel: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalValue: {
        color: Colors.primary,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
