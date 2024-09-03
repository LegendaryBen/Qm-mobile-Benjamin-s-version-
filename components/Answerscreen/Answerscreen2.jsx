import { View, Text,StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';


const Answerscreen2 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.scoreboard}>
            <Text style={styles.totalTime}>Total Time Used: 01:00</Text>
            <View style={styles.passBoard}>
                <View style={[styles.good,{paddingRight:10,borderRightWidth:1,borderRightColor:"black"}]}>
                    <Text style={[{marginRight:10},styles.goodText]}>10 Correct</Text>
                    <AntDesign name="checkcircle" size={24} color="rgba(0, 196, 73, 1)" />
                </View>
                <View style={[styles.good,{paddingLeft:10}]}>
                    <Text style={[{marginRight:10},styles.goodText]}>0 Incorrect</Text>
                    <AntDesign name="closecircle" size={24} color="rgba(249, 71, 75, 1)" />
                </View>
            </View>
        </View>
    </View>
  )
}

export default Answerscreen2


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        paddingHorizontal:20,
        marginTop:20 
    },
    scoreboard:{
        width:"100%",
        minHeight:76,
        backgroundColor:"white",
        borderRadius:10,
        borderWidth:4,
        borderColor:"rgba(0, 203, 247, 1)",
        padding:10
    },
    totalTime:{
        textAlign:"center",
        fontSize:12,
        lineHeight:18,
        fontWeight:"500",
        color:"rgba(0, 0, 0, 1)",
        fontFamily:"spaceG"
    },
    passBoard:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:10
    },
    good:{
        flexDirection:"row",
        alignItems:"center"
    },
    goodText:{
        fontSize:14,
        lineHeight:17,
        fontWeight:"700",
        fontFamily:"spaceG"
    }
})