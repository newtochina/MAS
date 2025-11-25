import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

const SERVICES = [
    { id: '1', name: 'General Service', price: '$250' },
    { id: '2', name: 'Oil Change', price: '$120' },
    { id: '3', name: 'Tire Replacement', price: '$80' },
    { id: '4', name: 'Brake Inspection', price: '$60' },
    { id: '5', name: 'Diagnostics', price: '$150' },
];

export default function BookingScreen() {
    const navigation = useNavigation();
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');

    const handleBook = () => {
        if (!selectedService || !date) {
            Alert.alert('Error', 'Please select a service and date.');
            return;
        }
        Alert.alert('Success', 'Your appointment request has been sent!', [
            { text: 'OK', onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <View style={GlobalStyles.container}>
            <ScrollView contentContainerStyle={GlobalStyles.screenContainer}>
                <Text style={GlobalStyles.title}>Book Service</Text>
                <Text style={GlobalStyles.subtitle}>Select a Service</Text>

                <View style={styles.servicesContainer}>
                    {SERVICES.map((service) => (
                        <TouchableOpacity
                            key={service.id}
                            style={[
                                styles.serviceCard,
                                selectedService === service.id && styles.serviceCardSelected
                            ]}
                            onPress={() => setSelectedService(service.id)}
                        >
                            <View>
                                <Text style={[
                                    styles.serviceName,
                                    selectedService === service.id && styles.serviceTextSelected
                                ]}>{service.name}</Text>
                                <Text style={[
                                    styles.servicePrice,
                                    selectedService === service.id && styles.serviceTextSelected
                                ]}>{service.price}</Text>
                            </View>
                            {selectedService === service.id && (
                                <Ionicons name="checkmark-circle" size={24} color={Colors.text} />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={[GlobalStyles.subtitle, { marginTop: 24 }]}>Preferred Date</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    placeholderTextColor={Colors.textSecondary}
                    value={date}
                    onChangeText={setDate}
                />

                <Text style={[GlobalStyles.subtitle, { marginTop: 24 }]}>Notes</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Describe any issues..."
                    placeholderTextColor={Colors.textSecondary}
                    value={notes}
                    onChangeText={setNotes}
                    multiline
                    numberOfLines={4}
                />

                <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
                    <Text style={styles.bookButtonText}>Request Appointment</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    servicesContainer: {
        gap: 12,
    },
    serviceCard: {
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceCardSelected: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.text,
    },
    servicePrice: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginTop: 4,
    },
    serviceTextSelected: {
        color: '#FFFFFF',
    },
    input: {
        backgroundColor: Colors.surface,
        borderRadius: 8,
        padding: 12,
        color: Colors.text,
        borderWidth: 1,
        borderColor: Colors.border,
        marginTop: 8,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    bookButton: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 32,
    },
    bookButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
