import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SquareBtn = () => {
    return (
        <View style={styles.addButton}>
            <Text style={{fontSize: 18, color: "#FFF"}}>Add Note</Text>
        </View>
    )
}

export default SquareBtn

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: "#0074D9",
        margin: 20,
        padding: 20,
        borderRadius: 10,
      },
})
