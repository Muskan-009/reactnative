import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const Apidatascreen = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        getdata();
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(data => {
        //         setPosts(data);
        //         setLoading(false);
        //     })
        //     .catch(err => {
        //         console.error(err);
        //         setLoading(false);
        //     });
    }, []);
    const getdata = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    };
    const renderItem = ({ item }) => (
        <View>
            <Text style={styles.color} >{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            <Text>{item.body}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>GET API</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 40,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    postItem: {
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
    color: {
        color: "red",
        fontSize: 34
    }
});

export default Apidatascreen;
