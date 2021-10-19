import React from 'react'
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, Text } from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import GestureRecognizer from 'react-native-swipe-gestures';
 
const NoteScreen = ({navigation}) => {
    const [input, setInput] = React.useState("");
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        navigation.setOptions({ title: "Notes: "+notes.length })
    }, [notes]);

    const addNote = () => {
        setNotes(notes => [{id: uuidv4(), text: input}, ...notes]);
        setInput("");
    }

    const editNote = (item, index) => {
        notes[index].text = item.text;
        setNotes([...notes])
    }

    const deleteNote = (id) => {
        const filteredData = notes.filter(item => item.id !== id);
        setNotes(filteredData );
    }

    const renderItem = ({ item, index }) => (
        <GestureRecognizer
            onSwipe={() => deleteNote(item.id)}
            config={config}
        >
            <TouchableOpacity onPress={() => editNote(item.id)}>
                <View style={styles.bubble}>
                    <TextInput style={styles.bubbleText} value={item.text} onChangeText={newText => editNote({id: item.id, text: newText}, index)} />
                </View>
            </TouchableOpacity>
      </GestureRecognizer>
    );

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <FlatList 
                    inverted
                    contentContainerStyle={styles.listInside} 
                    data={notes}
                    extraData={notes}
                    renderItem={renderItem}
            />
            </View>
            <View 
                style={styles.inputArea}
            >
                <TextInput
                    style={styles.input}
                    onChangeText={setInput}
                    onSubmitEditing={addNote}
                    value={input}
                />
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={addNote}
                >
                <Text style={{fontSize: 18, color: "#FFF"}}>+</Text>
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
    listInside: {
        flexGrow: 1,
        alignItems: "flex-end",
        margin: 10
    },
    inputArea: {
        flexDirection: 'row'
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 20,
        flex: 1,
        backgroundColor: "#DDDDDD"
    },
    addButton: {
        height: 40,
        width: 40,
        marginVertical: 12,
        marginRight: 12,
        borderRadius: 20,
        flex: 0,
        backgroundColor: "#0074D9",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    bubble: {
        borderRadius: 20,
        margin: 5,
        padding: 10,
        backgroundColor: "#0074D9"
    },
    bubbleText: {
        color: "#FFF",
        padding: 0
    }
})
