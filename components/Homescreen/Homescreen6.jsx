import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const Homescreen6 = ({items}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageBox,{backgroundColor:items.back}]}>
            <Image source={items.image}/>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{items.title}</Text>
      </View>
      <View style={styles.amountBox}>
        <Text style={styles.amount}>{items.amount}</Text>
      </View>
    </View>
  )
}

export default Homescreen6

const styles = StyleSheet.create({
    container:{
        marginRight:17,
        marginTop:30
    },
    imageBox:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        width:60,
        height:60
    },
    amountBox:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:8
    },
    amount:{
        fontSize:12,
        lineHeight:18,
        fontWeight:"400",
        fontFamily:"spaceG",
        color:"rgba(35, 100, 170, 1)"
    },
    titleBox:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:8
    },
    title:{
        fontSize:14,
        lineHeight:20,
        fontWeight:"700",
        fontFamily:"spaceG"
    }
})