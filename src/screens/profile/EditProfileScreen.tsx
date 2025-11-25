import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GlobalStyles } from '../../constants/Styles';

export default function EditProfileScreen() {
    const [name, setName] = useState('Rork');
    const [bio, setBio] = useState('Ducati Enthusiast | Track Day Junkie');
    const [email, setEmail] = useState('rork@example.com');

    const handleSave = () => {
        Alert.alert('Success', 'Profile updated successfully!');
    };

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.screenContainer}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor={Colors.textSecondary}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Bio</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={bio}
                        onChangeText={setBio}
                        multiline
                        numberOfLines={3}
                        placeholderTextColor={Colors.textSecondary}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholderTextColor={Colors.textSecondary}
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formGroup: {
        marginBottom: 20,
    },
    label: {
        color: Colors.textSecondary,
        marginBottom: 8,
        fontSize: 14,
    },
    input: {
        backgroundColor: Colors.surface,
        color: Colors.text,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        fontSize: 16,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
