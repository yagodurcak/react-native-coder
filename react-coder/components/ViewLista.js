import { Button, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [product, setProduct] = useState("");
  const [lista, setLista] = useState([]);
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const setearProducto = (text) => {
    setProduct(text)

  }
  const logevento = () => {
    if (product.trim() === "") {
      setError(true)
      
      return
    } 
    setError(false)
    setLista([...lista,
    {
      nombre: product,
      id: Math.random()
    }]);
    setProduct("")
    console.log(lista);
  }
  const deleteItem = (id) => {
   
    setLista(lista.filter(prod => prod.id !== id))

  }
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TextInput style={styles.input} placeholder=" Añadir Producto" onChangeText={setearProducto} value={product} />
        <Button title="ADD" onPress={logevento} />
      </View>
      {error ? <Text style={styles.alerta}>Espacio requerido</Text> : null}
      <ScrollView>
          {lista.map((item)=> <View style={styles.list} key={item.id}>
            <Text> {item.nombre}</Text>
            <Button title="X" onPress={() =>deleteItem(item.id)}/>
          </View>)}

            
      </ScrollView>

      <Modal animationType="slide" visible={modalVisible} transparent>
        <View >
          <View >
            <Text >¿Está seguro que desea borrar?</Text>
 
            <View>
              <Button
             
                title="CONFIRMAR"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: '#F0F0F0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
   
    marginTop: 50,
    flexDirection: "row",
    // backgroundColor: "green",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    width: "80%",
    marginRight: 5
  },
  alerta:{
    color: "red"
  },
  list: {
    width: 320,
    borderWidth: 1,
    flexDirection: "row",
    // backgroundColor: "green",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10

  }



});