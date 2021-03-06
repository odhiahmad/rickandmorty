import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';
import StackMain from './routes/route.main';

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackMain />
      </NavigationContainer>
    </Provider>
  );
}
