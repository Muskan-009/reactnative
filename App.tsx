// import React from 'react';
// import { View, FlatList, StyleSheet, Text, StatusBar, Button, ScrollView, ToastAndroid } from 'react-native';
// import Toast from 'react-native-toast-message';
// const showToast = () => {
//   ToastAndroid.show('Button pressed!', ToastAndroid.SHORT);   //short ka mean hai duration km time ke liye
//   ToastAndroid.show('dd', ToastAndroid.LONG)   
//   console.warn("helo show toast")
// };

// const showslider = () => {
//   ToastAndroid.show('dd', ToastAndroid.LONG)                   //long ka mean hai duration jyada time ke liye
// }
// const showallappbar = () => {

//   Toast.show({
//     type: 'success',
//     position: 'bottom',
//     text1: 'Success!',
//     text2: 'This is a success message!',
//   });

// }
// const App = () => (
//   <ScrollView contentContainerStyle={styles.container}>

//     <View style={styles.buttonWrapper}>
//       <Button title="showToast" color="green" onPress={showToast} />
//     </View>

//     <View style={styles.buttonWrapper}>
//       <Button title="showslider" color="red" onPress={showslider} />
//     </View>


//     <View style={styles.buttonWrapper}>
//       <Button title="showallappbar" color={"blue"} onPress={showallappbar} />
//     </View>



//     <View style={styles.buttonWrapper}>
//       <Button title="df" color="purple" onPress={showToast} />

//     </View>

//   </ScrollView>
// );



// const styles = StyleSheet.create({
//   container: {
//     padding: 40,
//     margin: 22,
//     marginTop: 220
//   },
//   titleText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   mediumText: {
//     fontSize: 23,
//     marginBottom: 5,
//   },
//   regularText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   largeText: {
//     fontSize: 34,
//     marginVertical: 10,
//   },
//   italicText: {
//     fontSize: 40,
//     fontStyle: 'italic',
//     color: '#D0FF0069',
//     marginVertical: 8,
//   },
//   buttonWrapper: {
//     marginVertical: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//   },

// });

// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import HomeScreen from './android/app/src/components/HomeScreen';
import ToastDemoScreen from './android/app/src/components/ToastDemoScreen';
import LoaderDemo from './android/app/src/components/LoaderDemo';
// import CarouselExample from './android/app/src/components/carousal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ToastDemo" component={ToastDemoScreen} />
          <Stack.Screen name = "LoaderDemo" component={LoaderDemo}/>
          {/* <Stack.Screen name = "CarouselExample" component={CarouselExample}/> */}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
