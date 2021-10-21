import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {useSelector} from 'react-redux';
import SquareBtn from '../components/SquareBtn';
import Note from '../components/Note';

const HomeScreen = (props) => {
  const noteList = useSelector(state => state.notes.noteList);

  const renderItem = ({item, index}) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Note', {index})}>
      <Note data={item[0].text} />
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
            <SquareBtn />
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

});

export default HomeScreen;
