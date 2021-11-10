import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';

// import styles from "../components/Styles"



const Card = (props) => {
    return (
        <View style={styles.gameContainer}>
                {props.children}
    </View>
    )
}

const styles = StyleSheet.create({
    buttonSection:{
        width: "100%",
        flexDirection:"row",
        justifyContent: "space-around",
        marginTop: 20
        
    },


    gameContainer :{
        // height: 250,
        marginTop: 20,
        padding: 30,
        width: 250,
        backgroundColor: "gray",
       
justifyContent: "space-between",
alignItems: "center",

shadowColor: "gray",
shadowOffset: {
    width: 0,
    height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,

    },



})
export default Card
