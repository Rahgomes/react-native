import React from 'react';
import {View, FlatList} from 'react-native';
import {DATA} from '../../utils/data';
import Cabecalho from './componentes/Cabecalho';
import { Item } from './componentes/Produto';

const ListaProdutos = () => {
  return (
    <View>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
};

export default ListaProdutos;
