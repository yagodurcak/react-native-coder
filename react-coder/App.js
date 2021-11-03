import React,{Fragment, useState}from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import InputLista from './components/InputLista';
import ViewLista from './components/ViewLista';

export default function App() {
  
 

  const [lista, setLista] = useState([]);



  return (
   
      
        <SafeAreaView>
          <InputLista setLista={setLista} lista={lista}/>
          <ViewLista/>
        </SafeAreaView>
 
  );
}

