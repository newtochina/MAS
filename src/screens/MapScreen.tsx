import React from 'react';
import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../constants/Colors';
import { GlobalStyles } from '../constants/Styles';

const SHOP_LOCATION = {
    latitude: -33.8967,
    longitude: 151.1926,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

export default function MapScreen() {
    const openMaps = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${SHOP_LOCATION.latitude},${SHOP_LOCATION.longitude}`;
        const label = 'Motomatch Garage';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });

        if (url) {
            Linking.openURL(url);
        }
    };

    return (
        <View style={GlobalStyles.container}>
            {Platform.OS === 'web' ? (
                <View style={styles.webFallback}>
                    <Text style={GlobalStyles.title}>Our Location</Text>
                    <View style={styles.infoCard}>
                        <Text style={styles.shopName}>Motomatch Garage</Text>
                        <Text style={styles.address}>123 O'Riordan St, Alexandria NSW 2015</Text>
                        <TouchableOpacity style={styles.directionsButton} onPress={openMaps}>
                            <Text style={styles.directionsButtonText}>Get Directions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <MapView
                        style={styles.map}
                        initialRegion={SHOP_LOCATION}
                    >
                        <Marker
                            coordinate={SHOP_LOCATION}
                            title="Motomatch Garage"
                            description="123 O'Riordan St, Alexandria NSW 2015"
                            pinColor={Colors.primary}
                        />
                    </MapView>

                    <View style={styles.overlayCard}>
                        <Text style={styles.shopName}>Motomatch Garage</Text>
                        <Text style={styles.address}>123 O'Riordan St, Alexandria NSW 2015</Text>
                        <TouchableOpacity style={styles.directionsButton} onPress={openMaps}>
                            <Text style={styles.directionsButtonText}>Get Directions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    webFallback: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    infoCard: {
        backgroundColor: Colors.surface,
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        maxWidth: 400,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    overlayCard: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        backgroundColor: Colors.surface,
        padding: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    shopName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 8,
    },
    address: {
        fontSize: 16,
        color: Colors.textSecondary,
        marginBottom: 16,
    },
    directionsButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
    },
    directionsButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
