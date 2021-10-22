import React from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import GestureRecognizer from 'react-native-swipe-gestures';
import {useSelector} from 'react-redux';
import NoteItem from '../components/NoteItem';
import ChatInput from '../components/ChatInput';
import { useDispatch } from 'react-redux';
import {setNoteList} from '../store/action'

const NoteScreen = ({navigation, route}) => {
    let index = route.params?.index;
    const noteList = useSelector(state => state.notes.noteList[index] || []);
    const [input, setInput] = React.useState("");
    const [notes, setNotes] = React.useState(noteList);
    const dispatch = useDispatch();
    if (index === undefined){
        index = noteList.length +1;
    }

    React.useEffect(() => {
        navigation.setOptions({ title: "Notes: "+notes.length })
    }, [notes]);

    const addNote = () => {
        if(input){
            const newNote = {id: uuidv4(), text: input}
            setNotes(notes => [newNote, ...notes]);
            setInput("");
            dispatch(setNoteList([newNote, ...notes], index))
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
        setNotes(filteredData);
        dispatch(setNoteList(filteredData, index))
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
