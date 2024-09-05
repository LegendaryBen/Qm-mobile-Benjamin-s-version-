import { View, Text,StyleSheet,ScrollView,ImageBackground,TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Answerscreen1 from '../components/Answerscreen/Answerscreen1';
import Answerscreen2 from '../components/Answerscreen/Answerscreen2';
import Answerscreen3 from '../components/Answerscreen/Answerscreen3';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';



const AnswerScreen = ({navigation,route}) => {

  const{passed,good,bad} = route.params;

  const insets = useSafeAreaInsets();

  useEffect(()=>{

    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    })

  },[])


  return (
    <ImageBackground source={(require('../assets/images/background.jpg'))} style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={{paddingTop:insets.top}}>
          <Answerscreen1/>
          <Answerscreen2 good1={good} bad1={bad}/>
          <Answerscreen3 passed={passed}/>
        </View>
        <View style={styles.homeBtn}>
            <TouchableOpacity style={styles.click} onPress={()=>{navigation.navigate("TabHome")}}>
              <Text style={styles.clickText}>Go Home</Text>
            </TouchableOpacity>
            
            <LinearGradient
              colors={['#FEE65E', '#ED7B2B']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.special}
            >
            </LinearGradient>
            <View style={[styles.special,{backgroundColor:"rgba(0, 203, 247, 1)",transform:[{translateY:-10}],width:"100%"}]}></View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default AnswerScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scrollview:{
        flex:1,
        backgroundColor:"rgba(23, 71, 139, 0.7)"
    },
    homeBtn:{
      minHeight:250,
      paddingHorizontal:20,
      width:"100%",
      justifyContent:"flex-end",
      alignItems:"center",
      marginBottom:50
    },
    click:{
      width:"100%",
      height:63,
      backgroundColor:"rgba(0, 203, 247, 1)",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:30,
      position:"relative",
      transform:[{translateY:-10}],
      zIndex:5
    },
    clickText:{
      fontSize:18,
      lineHeight:24,
      fontWeight:"700",
      fontFamily:"spaceG",
      color:"rgba(59, 59, 59, 1)",
    },
    special:{
      width:"90%",
      backgroundColor:"red",
      height:63,
      position:"absolute",
      bottom:0,
      borderRadius:30
    },
})