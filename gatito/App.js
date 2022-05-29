import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import reactotron, { networking } from "reactotron-react-native";

import { NativeModules, AsyncStorage } from 'react-native';
import url from 'url'

const {hostname} = url.parse(NativeModules.SourceCode.scriptURL);
console.log(hostname); // mine was 192.168.1.2

import Rotas from "./src/Rotas";
import TelaPadrao from "./src/componentes/TelaPadrao";

reactotron.configure({ host: hostname, port: 80}).useReactNative().use(networking()).connect();

export default function App() {
  reactotron.log("teste");
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
}
