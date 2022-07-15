import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    Keyboard,
} from 'react-native';

import Task from './components/Task';

export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const onAddTask = () => {
        // Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
    };

    const onCompleteTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>

                <View style={styles.items}>
                    {taskItems.map((task, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={(index) => onCompleteTask(index)}
                            >
                                <Task text={task} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>

            <KeyboardAvoidingView
                style={styles.writeTaskWrapper}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <TextInput
                    style={styles.tasksInput}
                    elevation={0}
                    onChangeText={(text) => setTask(text)}
                    value={task}
                    placeholder='Write a task'
                />

                <TouchableOpacity onPress={onAddTask}>
                    <View style={styles.addWrapper} elevation={0}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 50,
        marginBottom: 20,
    },
    tasksWrapper: {},
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 20,
    },

    writeTaskWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',

        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tasksInput: {
        width: '80%',
        backgroundColor: '#fafafa',
        padding: 12,
        borderRadius: 5,
    },
    addWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fafafa',
    },
    addText: {},
});
