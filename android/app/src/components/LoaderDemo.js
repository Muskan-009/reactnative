import React, { useState, useRef } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button, ScrollView, Animated } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoaderDemo = () => {
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);


    const rotateValue = useRef(new Animated.Value(0)).current;

    const handlePress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const handlePress1 = () => {
        setLoading1(true);
        setTimeout(() => {
            setLoading1(false);
        }, 1000);
    };

    const handlePress2 = () => {
        setLoading2(true);
        setTimeout(() => {
            setLoading2(false);
        }, 3000);


        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    };

    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Button title="Loader" color="red" onPress={handlePress} />
            {loading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="red" />
                    <Text style={{ marginTop: 10 }}>Loading...</Text>
                </View>
            )}


            <Button title="Spinner" color="pink" onPress={handlePress1} />
            {loading1 && (
                <View style={styles.loaderContainer}>
                    <Spinner
                        visible={loading1}
                        textContent={'Loading...'}
                        textStyle={{ color: '#FFF' }}
                    />
                </View>
            )}


            <Button title="Image Icon loader" color="orange" onPress={handlePress2} />
            {loading2 && (
                <View style={styles.loaderContainer}>
                    <Animated.View style={{ transform: [{ rotate }] }}>
                        {/* <Icon name="hourglass-empty" size={50} color="#FF00C8FF" />
                        <Icon name="ios-refresh" size={50} color="#0000ff" /> */}
                        <Icon name="spinner" size={50} color="#FF009DFF" />
                    </Animated.View>
                    {/* <Text style={{ marginTop: 10 }}>Loading...</Text> */}
                </View>
            )}

        </ScrollView>
    );
};

export default LoaderDemo;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loaderContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});
