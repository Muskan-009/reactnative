import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button color="red" title="Show Toast Demo" onPress={() => navigation.navigate('ToastDemo')} /> <View style={{ height: 20 }} />
            <Button color="green" title="Show Loader" onPress={() => navigation.navigate('LoaderDemo')} /> <View style={{ height: 22 }} />
            <Button color="purple" title="Show Loader" onPress={() => navigation.navigate('carousal')} /> <View style={{ height: 22 }} />
            {/* <Button color="pink" title="Show image" onPress={() => navigation.navigate('carousal')} /> <View style={{ height: 22 }} /> */}
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});

export default HomeScreen;
