import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Homescreen7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={require('../../assets/images/share.png')}/>
        <View style={styles.inviteBox}>
            <View style={styles.referBox}>
                <Text style={styles.referText}>Refer & Earn with your Friends</Text>
            </View>
            <View style={styles.detailBox}>
                <Text style={styles.detail}>Share with your friends and loved ones to come and play</Text>
            </View>
            <TouchableOpacity style={styles.btnBox}>
                <Text style={styles.btn}>Invite Friends</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Homescreen7

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:20,
        marginBottom:50
    },
    box:{
        width:"100%",
        height:140,
        backgroundColor:"rgba(35, 100, 170, 1)",
        borderRadius:20,
        overflow:"hidden",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    image:{
        width:"100%",
        height:"100%",
        objectFit:"contain"
    },
    inviteBox:{
        width:"80%",
        height:"100%",
        position:"absolute",
        top:0,
        left:0,
        borderRadius:20,
        padding:20
    },
    referBox:{
        marginBottom:5
    },
    referText:{
        fontSize:18,
        lineHeight:20,
        fontWeight:"700",
        fontFamily:"spaceG",
        color:"rgba(249, 249, 249, 1)"
    },
    detail:{
        fontFamily:"spaceG",
        fontSize:12,
        lineHeight:18,
        fontWeight:"400",
        color:"rgba(242, 242, 242, 1)"
    },
    detailBox:{
        marginBottom:10
    },
    btnBox:{
        width:96,
        height:30,
        borderColor:"rgba(255, 255, 255, 0.7)",
        borderWidth:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30
    },
    btn:{
        color:"rgba(242, 242, 242, 1)",
        fontFamily:"spaceG",
        fontSize:10,
        lineHeight:22,
        fontWeight:'500'
    }
})