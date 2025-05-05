import React from 'react';
import { View, Button, StyleSheet, ToastAndroid, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';

const ToastDemoScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button
                title="Show Android SHORT Toast"
                onPress={() => ToastAndroid.show('Short Toast!', ToastAndroid.SHORT)}
            />
            <Button
                title="Show Android LONG Toast"
                color="orange"
                onPress={() => ToastAndroid.show('Long Toast!', ToastAndroid.LONG)}
            />

            <Button
                title="Show Custom Success Toast"
                color="green"
                onPress={() =>
                    Toast.show({
                        type: 'success',
                        text1: 'Success!',
                        text2: 'This is a custom success toast ',
                    })
                }
            />

            <Button
                title="Show Custom Error Toast"
                color="red"
                onPress={() =>  
                    Toast.show({
                        type: 'error',
                        text1: 'Error!',
                        text2: 'Something went wrong ',
                    })
                }
            />

            <Button
                title="Show Custom Info Toast"
                color="blue"
                onPress={() =>
                    Toast.show({
                        type: 'info',
                        text1: 'Info!',
                        text2: 'This is some information',
                    })
                }
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        gap: 15,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

export default ToastDemoScreen;
