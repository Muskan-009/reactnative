import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button color="red" title="Show Toast Demo" onPress={() => navigation.navigate('ToastDemo')} /> 
                <View style={{ height: 20 }} />
            <Button color="green" title="Show Loader" onPress={() => navigation.navigate('LoaderDemo')} /> 
                <View style={{ height: 22 }} />
            <Button color="pink" title="Show Card" onPress={() => navigation.navigate('CardsScreen')} /> 
                <View style={{ height: 22 }} />
            <Button color="blue" title='Show Check box' onPress={() => navigation.navigate('checkbox')} /> 
                <View style={{ height: 22 }} />
            <Button color="orange" title='Show Text box / table' onPress={() => navigation.navigate('TextField')} /><View style={{ height: 22 }} />
            <Button color= "black" title='Apidatascreen' onPress={()=>navigation.navigate('Apidatascreen')}/>      <View style={{ height: 22 }} />
            <Button color= "yellow" title='Alertdialogscreen' onPress={()=>navigation.navigate('Alertdialogscreen')}/>      <View style={{ height: 22 }} />
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
