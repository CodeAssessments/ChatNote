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
import {delNoteList} from '../store/action'
import { useDispatch } from 'react-redux';
import { useIsFocused } from "@react-navigation/native";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const noteList = useSelector(state => state.notes.noteList);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    noteList.forEach((element, index) => {
      if(element.length === 0){
        dispatch(delNoteList(index))
      }
    });
  }, [isFocused])

  const renderItem = ({item, index}) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Note', {index})}>
      <Note data={item} index={index} />
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
