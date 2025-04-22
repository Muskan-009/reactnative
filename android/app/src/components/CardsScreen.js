import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Card, Text, Button, Badge } from 'react-native-paper';
import { Image, ImageBackground, SafeAreaView } from 'react-native-safe-area-context';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const MyCard = () => (
    <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <Card style={styles.container}>
                <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                // left={LeftContent}
                />
                <Card.Content>
                    <Text variant='displayMedium' style={{ textAlign: 'center' }}>First Card</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>

            {/* More cards and Avatars */}
            <SecondCard />
            <SecondCard />
            <SecondCard />
            <SecondCard /> <SecondCard />
            <SecondCard /> <SecondCard />
            <SecondCard />
            <Avtarr />
            <Avtarrimage />
            <Imgaeexample />
        </ScrollView>
    </View>
);

const SecondCard = () => {
    return (
        <Card style={styles.container1}>
            <Card.Title title="Second Card" subtitle="Card Subtitle" />
            <Card.Content>
                <Text>This is content for the second card.</Text>
            </Card.Content>
        </Card>
    );
};

const Avtarr = () => {
    return <Avatar.Icon size={90} icon="folder" style={styles.avatar} />;
};

const Avtarrimage = () => (
    <>
        <Avatar.Image
            size={100}
            source={{ uri: 'https://picsum.photos/700' }}
            style={styles.avatar}
        />
        <Badge>3</Badge>
    </>
);

const Imgaeexample = () => {
    const image = { uri: '../images/icon.png' };
    <>
        <SafeAreaView style={styles.container}>
            {/* <Image source={require('../images/icon.png')} style={styles.image} /> */}
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </SafeAreaView>
    </>
}
const styles = StyleSheet.create({
    container: {
        padding: 11,
        margin: 14,
    },
    container1: {
        // padding:4,
        width: 318,
        margin: 11,
    },
    scrollContent: {
        paddingBottom: 10,
        alignItems: 'center',
    },
    avatar: {
        margin: 10,
    },
    image: {
        width: 100,
        height: 190,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});

export default MyCard;
