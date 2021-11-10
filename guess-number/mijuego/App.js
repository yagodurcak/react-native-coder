import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGame from './screens/StartGame';

export default function App() {

  const [confirmNumber, setconfirmNumber] = useState(NaN);

  
  const screen = confirmNumber ? <Text>Elijass</Text>  : <StartGame setconfirmNumber={setconfirmNumber}/>

  return (
    <View style={styles.container}>      
      <Header title="Adivina el número" />
      {screen}
    </View>
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
