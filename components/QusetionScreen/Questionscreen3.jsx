import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Questionscreen3 = ({tracker,obj}) => {
  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <Text style={styles.question}>Question {tracker+1}</Text>
        <Text style={styles.mainQuestion}>{obj.question}</Text>
      </View>
    </View>
  )
}

export default Questionscreen3

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:30, 
        paddingHorizontal:20
    },
    questionBox:{
        minHeight:182,
        borderWidth:8, 
        borderColor:"#00CBF7",
        width:"100%",
        borderRadius:20,
        backgroundColor:"white",
        paddingHorizontal:30,
        paddingVertical:30 
    },
    question:{
        textAlign:"center",
        fontFamily:"spaceG",
        fontSize:20,
        lineHeight:32,
        fontWeight:"700" 
    },
    mainQuestion:{
        textAlign:"center",
        fontFamily:"spaceG",
        fontSize:16,
        lineHeight:24,
        fontWeight:"500",
        color:"#1B1B1B",
        marginTop:10
    }
})