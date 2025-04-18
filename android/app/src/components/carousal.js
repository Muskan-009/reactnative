// import React from 'react';
// import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const { width } = Dimensions.get('window');
// const data = [
//     { id: '1', image: 'https://via.placeholder.com/400x200?text=Image+1' },
//     { id: '2', image: 'https://via.placeholder.com/400x200?text=Image+2' },
//     { id: '3', image: 'https://via.placeholder.com/400x200?text=Image+3' },
//     { id: '4', image: 'https://via.placeholder.com/400x200?text=Image+4' },
//     { id: '5', image: 'https://via.placeholder.com/400x200?text=Image+5' },
// ];

// const CarouselExample = () => {
//     const renderItem = ({ item }) => (
//         <View style={styles.itemContainer}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Image Carousel</Text>
//             <Carousel
//                 data={data}
//                 renderItem={renderItem}
//                 sliderWidth={width} // screen width
//                 itemWidth={width * 0.8} // item width as 80% of the screen width
//                 inactiveSlideScale={0.9} // inactive items scale down slightly
//                 inactiveSlideOpacity={0.7} // opacity for inactive items
//                 loop={true} // loop the carousel
//                 autoplay={true} // autoplay the carousel
//             />
//         </View>
//     );
// };

// export default CarouselExample;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingTop: 20,
//     },
//     header: {
//         fontSize: 24,
//         marginBottom: 20,
//     },
//     itemContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         height: 200,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//     },
//     image: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 10,
//     },
// });
