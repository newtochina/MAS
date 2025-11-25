import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GlobalStyles } from '../../constants/Styles';

export default function AddBikeScreen() {
    const navigation = useNavigation();
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    const handleAddBike = () => {
        if (!make || !model || !year) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        // In a real app, this would save to a database or context
        Alert.alert('Success', 'Bike added successfully!', [
            { text: 'OK', onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.screenContainer}>
                <Text style={GlobalStyles.title}>Add New Motorcycle</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Make</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Ducati"
                        placeholderTextColor={Colors.textSecondary}
                        value={make}
                        onChangeText={setMake}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Model</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. Panigale V4"
                        placeholderTextColor={Colors.textSecondary}
                        value={model}
                        onChangeText={setModel}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Year</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. 2023"
                        placeholderTextColor={Colors.textSecondary}
                        value={year}
                        onChangeText={setYear}
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.submitButton} onPress={handleAddBike}>
                    <Text style={styles.submitButtonText}>Add to Garage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: Colors.textSecondary,
        marginBottom: 8,
        fontSize: 16,
    },
    input: {
        backgroundColor: Colors.surface,
        color: Colors.text,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.border,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
