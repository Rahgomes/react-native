import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ListaProdutos from './view/ListaProdutos';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListaProdutos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
  },
});

export default App;
