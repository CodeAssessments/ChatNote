import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Note = ({data, index}) => {
    console.log(data)
    return (
        <View style={styles.noteContainer}>
            <Text>{index+1}. {data[0]?.text}</Text>
            <View style={styles.hr} />
        </View>
    )
}

export default Note

const styles = StyleSheet.create({
    noteContainer: {
        margin: 5,
        padding: 5
    },
    hr: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
    }
})
