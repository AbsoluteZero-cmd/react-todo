import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item} elevation={0}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 15,
        backgroundColor: '#fafafa',
        borderRadius: 10,

        marginBottom: 20,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    itemLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    square: {
        width: 30,
        height: 30,
        backgroundColor: '#89f1f5',
        opacity: 0.5,

        borderRadius: 5,
    },
    itemText: {
        marginLeft: 20,
    },
    circular: {
        width: 20,
        height: 20,
        opacity: 0.5,

        borderRadius: 50,
        borderColor: '#89f1f5',
        borderStyle: 'solid',
        borderWidth: 3,
    },
});

export default Task;
