import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './src/Profile';
import useCachedResources from './hooks/useCachedResources';

export default function App() {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                <Profile />
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
});




