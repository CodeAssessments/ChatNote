import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import RoundBtn from '../components/RoundBtn';

const ChatInput = ({input, setInput, addNote}) => {
    return (
        <View style={styles.inputArea}>
            <TextInput
                style={styles.input}
                onChangeText={setInput}
                onSubmitEditing={addNote}
                value={input}
            />
            <TouchableOpacity onPress={addNote}>
                <RoundBtn />
            </TouchableOpacity>
        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
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
})
