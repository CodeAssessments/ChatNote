import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const NoteItem = ({item, index, editNote}) => {
    return (
        <View style={styles.bubble}>
            <TextInput 
                style={styles.bubbleText} 
                value={item.text} 
                multiline={true}
                onChangeText={newText => editNote({id: item.id, text: newText}, index)} 
            />
        </View>
    )
}

export default NoteItem

const styles = StyleSheet.create({
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
