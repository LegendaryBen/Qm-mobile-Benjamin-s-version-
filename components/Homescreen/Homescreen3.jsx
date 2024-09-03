import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Homescreen3 = () => {

  const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <View style={styles.showBox}>
          <Image style={styles.background} source={require('../../assets/images/prize.jpg')}/>
          <View style={styles.prizeContainer}>
              <View style={styles.questionContainer}>
                  <View style={styles.quetionBox}>
                    <AntDesign name="question" size={12} color="white" />
                  </View>
              </View>
              <View style={styles.gameContainer}>
                <View style={styles.gameBox}>
                  <Text style={styles.gameText} numberOfLines={1}>Game Prize</Text>
                </View>
                <View style={[styles.gameBox,{paddingTop:5}]}>
                  <Text style={[styles.gameText,{fontSize:48}]} numberOfLines={1}>₦1,000,000</Text>
                </View>
                <View style={styles.nextGameBox}>
                  <Text style={styles.nextGameText}>Next Game: Tomorrow, 8PM </Text>
                </View>
              </View>
              <View style={styles.joinBox}>
                  <TouchableOpacity style={styles.joinButton} onPress={()=>navigation.navigate("Questions")}>
                    <Text style={styles.joinButtonText}>Join Game</Text>
                  </TouchableOpacity>
                  <Text style={styles.entryText}>Entry Fee ₦100.00</Text>
              </View>
          </View>
      </View>
    </View>
  )
}

export default Homescreen3

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:135,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"center"
    },
    showBox:{
        width:"100%",
        height:246,
        backgroundColor:"blue",
        position:"absolute",
        top:"-100%",
        borderRadius:20,
        overflow:"hidden"
    },
    background:{
      width:"100%",
      height:"100%"
    },
    prizeContainer:{
      width:"100%",
      height:"100%",
      borderRadius:20,
      position:"absolute",
      top:0,
      left:0
    },
    questionContainer:{
      flexDirection:"row",
      justifyContent:"flex-end",
      paddingHorizontal:20,
      paddingTop:20
    },
    quetionBox:{
      width:18,
      height:18,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"rgba(81, 162, 224, 1)",
      borderRadius:50
    },
    gameBox:{
      flexDirection:"row",
      justifyContent:"center",
      paddingHorizontal:20,
      paddingTop:10
    },
    gameText:{
      color:"rgba(23, 71, 139, 1)",
      fontSize:20,
      fontFamily:"dmVariable",
      fontWeight:"700"
    },
    gameContainer:{
      flex:1
    },
    nextGameBox:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"center",
      paddingHorizontal:20
    },
    nextGameText:{
      fontSize:12,
      lineHeight:22,
      fontWeight:"500",
      color:"rgba(59, 59, 59, 1)"
    },
    joinBox:{
      width:"100%",
      height:63,
      backgroundColor:"rgba(35, 100, 170, 1)",
      paddingHorizontal:20,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
    joinButton:{
        borderRadius:13,
        paddingHorizontal:13,
        paddingVertical:5,
        backgroundColor:"white"
    },
    joinButtonText:{
        fontSize:12,
        lineHeight:18,
        fontWeight:"500",
        color:'rgba(23, 71, 139, 1)',
        fontFamily:'spaceG'
    },
    entryText:{
        fontWeight:"500",
        fontFamily:"spaceG",
        fontSize:12,
        lineHeight:18,
        color:"rgba(255, 255, 255, 1)"
    }
})