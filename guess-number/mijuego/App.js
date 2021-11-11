import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, _Text } from 'react-native';
import React, {useEffect, useState} from 'react';

import Header from './components/Header';
import StartGame from './screens/StartGame';

export default function App() {

  const [confirmNumber, setconfirmNumber] = useState(NaN);
  const [segundaConfirm, setsegundaConfirm] = useState(NaN)


  const secondconfirm = () => {
    setsegundaConfirm(confirmNumber)

  }
  
 


  
  const screen = confirmNumber ? 
  <View>
    <Text>Confirma el numero : {confirmNumber} ?</Text>  
    <Button title="Confirmar" onPress={secondconfirm} />
  </View>
  : null

  const screen2 = segundaConfirm ?
  
  <Text>Elegiste el numero : {segundaConfirm}</Text>
  : 
  <View style={styles.container}>
    <StartGame setconfirmNumber={setconfirmNumber}/>
    {screen}
  </View>

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        {screen2}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems:"center"
  },
  headerCont:{
    backgroundColor:"green"
  }
});
