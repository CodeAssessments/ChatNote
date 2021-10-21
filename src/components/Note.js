import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Note = ({data}) => {
    return (
        <View style={styles.noteContainer}>
            <Text>{data}</Text>
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
