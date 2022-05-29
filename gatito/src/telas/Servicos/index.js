import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Dê banho no seu gato",
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Dê vacina v4 no seu gato",
  },
  {
    id: 3,
    nome: "Vacina antirrábica",
    preco: 99.9,
    descricao: "Dê vacina antirrábica no seu gato",
  },
];

export default function Servicos() {
  return (
    <>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
