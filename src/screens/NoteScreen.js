import React from 'react'
import { StyleSheet, View, FlatList, TextInput, TouchableOpacity, Text } from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import GestureRecognizer from 'react-native-swipe-gestures';
import {useSelector} from 'react-redux';
import NoteItem from '../components/NoteItem';
import ChatInput from '../components/ChatInput';

const NoteScreen = ({navigation, route}) => {
    const index = route.params?.index;
    const noteList = useSelector(state => state.notes.noteList[index]) || [];
    const [input, setInput] = React.useState("");
    const [notes, setNotes] = React.useState(noteList);

    React.useEffect(() => {
        navigation.setOptions({ title: "Notes: "+notes.length })
    }, [notes]);

    const addNote = () => {
        if(input){
            setNotes(notes => [{id: uuidv4(), text: input}, ...notes]);
            setInput("");
        }
    }

    const editNote = (item, index) => {
        if(notes[index]){
            notes[index].text = item.text;
            setNotes([...notes])
        }
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
                <NoteItem item={item} index={index} editNote={editNote} />
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
            <ChatInput input={input} setInput={setInput} addNote={addNote} />
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
})
