import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';

const App = () => (
  <View style={{ flex: 1}}>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
  );


AppRegistry.registerComponent('albums', () => App);
