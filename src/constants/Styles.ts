import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    screenContainer: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '800', // Extra bold for headers
        color: Colors.text,
        marginBottom: 20,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.text,
        marginBottom: 12,
        letterSpacing: -0.3,
    },
    card: {
        backgroundColor: Colors.surface,
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    primaryButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    input: {
        backgroundColor: Colors.surfaceLight,
        borderRadius: 12,
        padding: 16,
        color: Colors.text,
        borderWidth: 1,
        borderColor: Colors.border,
        fontSize: 16,
    },
});
