import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';


const Questionscreen5 = ({retry, func}) => {

  const details = useWindowDimensions()

  useEffect(()=>{

    func(true)

  },[])

  return (
    <View style={[styles.container,{height:details.height}]}>
        <Text style={styles.notice}>Network Error</Text>
        <TouchableOpacity style={styles.retryButton} onPress={retry}>
            <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    retryButton:{
        width:90,
        height:50,
        backgroundColor:"black",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    retryButtonText:{
        color:"rgba(42, 117, 188, 1)",
        fontFamily:"dmVariable",
        fontSize:14,
        fontWeight:"500"
    },
    notice:{
        marginBottom:20
    }
})

export default Questionscreen5;
