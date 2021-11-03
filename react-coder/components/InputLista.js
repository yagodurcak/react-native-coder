import { Button, StyleSheet, TextInput, View } from 'react-native';
import React,{useState} from 'react';

import { StatusBar } from 'expo-status-bar';

const InputLista = ({setLista, lista}) => {

    const [product, setProduct] = useState(" ");
    
    const setearProducto = (text) => {
        setProduct(text)

    }
    const logevento = () => {
        
        setLista([...lista,
            {nombre: product,
            id: Math.random()}]);    
        setProduct("")    
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            
            <TextInput style={styles.input} placeholder=" Añadir Producto" onChangeText={setearProducto} value={product}/>
            <Button title="ADD" onPress={logevento}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {   
        flex: 1,       
        marginTop: 50 ,       
        flexDirection: "row",
        // backgroundColor: "green",
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
    input: {
      borderWidth: 2,
      width:"80%",
      marginRight: 5
    }
    
  });

  

  
  

export default InputLista
