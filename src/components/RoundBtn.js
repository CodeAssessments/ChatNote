import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RoundBtn = () => {
    return (
        <View style={styles.addButton}>
            <Text style={{fontSize: 18, color: "#FFF"}}>+</Text>
        </View>
    )
}

export default RoundBtn

const styles = StyleSheet.create({
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
})
