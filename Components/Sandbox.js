import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end",
        paddingTop:40,
        backgroundColor:"#ddd",
    },
    boxOne:{
        flex:1,
        backgroundColor:"violet",
        padding:10,
    },
    boxTwo:{
        flex:1,
        backgroundColor:"gold",
        padding:20,
    },
    boxThree:{
        flex:1,
        backgroundColor:"coral",
        padding:30,
    },
    boxFour:{
        flex:2,
        backgroundColor:"skyblue",
        padding:40,
    },
});

// flexbox testing