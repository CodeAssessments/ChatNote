import React from 'react'
import { StyleSheet, View, FlatList, TextInput } from 'react-native'

const NoteScreen = () => {
    const [input, setInput] = React.useState("");

    return (
        <View style={styles.container}>
            <FlatList style={styles.list} />
            <TextInput
                style={styles.input}
                onChangeText={setInput}
                value={input}
            />
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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        flex: 0
    },
})
