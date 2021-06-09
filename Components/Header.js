import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:"coral"
    },
    title:{
        paddingTop:5,
        textAlign:"center",
        fontWeight:"bold",
        color:"#fff",
        fontSize:20
    }
});