import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Header =  ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        // padding: 36,
        width: "100%",
        height: 100,
        paddingTop: 20,
        backgroundColor:"blue",
        justifyContent: 'center',
        alignItems:"center"
           },
    headerTitle: {
            color: 'white',
            fontSize: 22,
            // fontWeight: "700",
         
            fontFamily: 'Mohave',
          },
        
})

export default Header
