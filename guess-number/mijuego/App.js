import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, _Text } from 'react-native';
import React, {useEffect, useState} from 'react';

import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import StartGame from './screens/StartGame';
import { useFonts } from 'expo-font';

const FONT_DEFAULT = 'Mohave';

export default function App() {

  const [loaded] = useFonts({
    [FONT_DEFAULT]: require('./assets/fonts/Roboto-BlackItalic.ttf'),

  });
  
  const [confirmNumber, setconfirmNumber] = useState(NaN);
  const [segundaConfirm, setsegundaConfirm] = useState(NaN)
  
  if (!loaded) return <AppLoading/>;

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
