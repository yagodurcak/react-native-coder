import { StyleSheet, TextInput, View } from 'react-native';

import React from 'react';

const Input = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Ingrese un número"
        keyboardType="numeric" maxLength= {2} {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginTop:15,
        padding: 10,
      backgroundColor:"white"
        
    },

})

export default Input
