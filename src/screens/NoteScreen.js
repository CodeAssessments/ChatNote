import React from 'react'
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, Text } from 'react-native'

const NoteScreen = () => {
    const [input, setInput] = React.useState("");
    const [notes, setNotes] = React.useState(["test"]);

    const addNote = () => {
        setNotes(notes => [input, ...notes]);
        setInput("");
    }

    const renderItem = ({ item }) => (
        <View style={styles.bubble}>
            <Text>{ item }</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList 
                contentContainerStyle={styles.list} 
                data={notes}
                extraData={notes}
                renderItem={renderItem}
            />
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    onChangeText={setInput}
                    value={input}
                />
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={addNote}
                >
                <Text style={{fontSize: 18, color: "#000"}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin: 10
    },
    inputArea: {
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        flex: 1
    },
    addButton: {
        height: 40,
        width: 40,
        marginVertical: 12,
        marginRight: 12,
        borderWidth: 1,
        borderRadius: 20,
        flex: 0,
        backgroundColor: "#39CCCC",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    bubble: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        padding: 5
    }
})
