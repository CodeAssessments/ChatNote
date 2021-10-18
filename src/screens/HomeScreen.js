import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('Note')}
        >
          <Text style={{fontSize: 18, color: "#FFF"}}>Add Note</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  addButton: {
    backgroundColor: "#0074D9",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  }
});

export default HomeScreen;
