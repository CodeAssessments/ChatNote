import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = (props) => {
  const noteList = useSelector(state => state.notes.noteList);

  const renderItem = ({item, index}) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Note', {index})}>
      <View style={styles.noteContainer}>
        <Text>{item[0]}</Text>
        <View style={styles.hr} />
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View style={styles.container}>
        <FlatList 
          data={noteList}
          extraData={noteList}
          style={{flex: 1}}
          renderItem={(props) => renderItem(props)}
        />
        <View style={{alignItems:"flex-end"}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Note')}>
            <View style={styles.addButton}>
              <Text style={{fontSize: 18, color: "#FFF"}}>Add Note</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noteContainer: {
    margin: 5,
    padding: 5
  },
  addButton: {
    backgroundColor: "#0074D9",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  hr: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  }
});

export default HomeScreen;
