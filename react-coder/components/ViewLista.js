import { StyleSheet, Text, View } from 'react-native'

import React from 'react';

const ViewLista = () => {
    return (
        <View style={styles.container}>
            <Text>hola</Text>
            <Text>sjsjsjsj</Text>
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

    
  });


export default ViewLista
