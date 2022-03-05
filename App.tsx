import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {AppRouter} from './src/navigation/AppRouter';
import store, {persistor} from './src/store/configureStore';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </View>
  );
}
