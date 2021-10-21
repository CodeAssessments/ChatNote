import * as React from 'react';
import Navigation from './src/navigation/Navigation';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import noteReducer from './src/store/reducer';

const rootReducer = combineReducers({
  notes: noteReducer
})

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;