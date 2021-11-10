import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

import Card from '../components/Card';
import Input from '../components/Input';

// import styles from "../components/Styles";


const StartGame = ({setconfirmNumber}) => {

    const [numero, setNumero] = useState("");
    const [errores, setErrores] = useState(false)
    

    const numeroElegido = (text) => {
        setNumero(text.replace(/[^0-9]/g, ''));
    }
    const deleteNumber = () => {
        setNumero("")
    }

    const confirmarNumber = () => {
      const numerofinal = parseInt(numero)
      if (numerofinal === NaN || numerofinal <= 0 || numero > 99) {
        setErrores(true) ;
        return;
      }else {
        setErrores(false)
          setconfirmNumber(numerofinal)
          setNumero("")
      }
    }

    const validacion = errores ? <Text style={styles.alerta}>Elija un número entre el 1 y el 99</Text>  : null
    
    
    

    return (
        <View style={styles.screennContainer}>
            <Text style={styles.gameTitle}>Comenzar Juego</Text>
            <Card>
            <Text style={styles.titlecard}>Elija un número</Text>
          
            <Input onChangeText= {numeroElegido} autoCapitalization="none"
          autoCorrect={false} value={numero}></Input>
        <View style={styles.buttonSection}>
            <Button title= "limpiar" onPress={deleteNumber} />
            <Button title= "Confirmar" onPress={confirmarNumber}/>               
        </View>
            </Card>
            {validacion}
                <Text>Elija un número</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonSection:{
        width: "100%",
        flexDirection:"row",
        justifyContent: "space-around",
        marginTop: 20,
        
        
    
        
    },
    titlecard:{
        color: "white",
        fontSize: 20,
        fontWeight:"700"
    },
    screennContainer:{
        height: "50%",
        // backgroundColor:"gray",
        justifyContent:"center",
        alignItems: "center"

    },

    gameContainer :{
        // height: 250,
        marginTop: 20,
        padding: 30,
        width: 250,
        // backgroundColor: "green",
       
justifyContent: "space-between",
alignItems: "center"

    },
    gameTitle:{
        fontSize: 30,
        fontWeight: "bold"
    },

    alerta:{
        color: "red"
    }
})

export default StartGame
