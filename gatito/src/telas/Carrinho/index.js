import React from "react";
import { FlatList } from "react-native";
import StatusCarrinho from "../../componentes/StatusCarrinho";
import Item from "./Item";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Dê banho no seu gato",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Dê vacina v4 no seu gato",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina antirrábica",
    preco: 99.9,
    descricao: "Dê vacina antirrábica no seu gato",
    quantidade: 1,
  },
];

export default function Carrinho() {
  const total = servicos.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  );

  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
