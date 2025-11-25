import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { GlobalStyles } from '../../constants/Styles';

export default function PrivacyScreen() {
    const [isPublic, setIsPublic] = useState(true);
    const [showGarage, setShowGarage] = useState(true);
    const [allowMessages, setAllowMessages] = useState(false);

    const renderToggle = (label: string, value: boolean, onValueChange: (val: boolean) => void) => (
        <View style={styles.toggleRow}>
            <Text style={styles.label}>{label}</Text>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: Colors.surface, true: Colors.primary }}
                thumbColor={Colors.text}
            />
        </View>
    );

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.screenContainer}>
                <Text style={styles.sectionTitle}>Profile Visibility</Text>
                {renderToggle('Public Profile', isPublic, setIsPublic)}
                {renderToggle('Show Garage to Others', showGarage, setShowGarage)}

                <Text style={[styles.sectionTitle, { marginTop: 32 }]}>Communication</Text>
                {renderToggle('Allow Direct Messages', allowMessages, setAllowMessages)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        color: Colors.textSecondary,
        fontSize: 14,
        textTransform: 'uppercase',
        marginBottom: 16,
        fontWeight: '600',
    },
    toggleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.surface,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    label: {
        color: Colors.text,
        fontSize: 16,
    },
});
