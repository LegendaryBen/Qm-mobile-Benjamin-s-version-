import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import QusetionScreen2 from './Questionscreen2'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Questionscreen3 from './Questionscreen3';
import Qusetionscreen4 from './Qusetionscreen4';


const Questionscreen1 = () => {

  const insets = useSafeAreaInsets();

  const data = [1,1,1,1];

  return (
    <View style={[{paddingTop:insets.top}]}>
      <View style={styles.timerBox}>
          <View style={styles.timeCont}>
            <MaterialCommunityIcons name="timer-outline" size={20} color="white" />
            <Text style={styles.timerText}>00.00.40</Text>
          </View>
          <QusetionScreen2 progress={0.8} value={5}/>
          <View/>
      </View>
      <Questionscreen3/>
      <View style={styles.chooseBox}>
        <Text style={styles.choose}>Choose  Correct  Option</Text>
      </View>
      {
        data.map((item,i)=><Qusetionscreen4 key={i}/>)
      }
    </View>
  )
}

export default Questionscreen1


const styles = StyleSheet.create({
    timerBox:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:20,
      alignItems:"center",
      marginTop:30
    },
    timeCont:{
      flexDirection:"row",
      alignItems:"center"
    },
    timerText:{
      fontFamily:"spaceG",
      fontSize:14,
      lineHeight:20,
      fontWeight:"400",
      color:"#FFFFFF"
    },
    chooseBox:{
      paddingHorizontal:20,
      marginTop:30 
    },
    choose:{
      fontFamily:"spaceG",
      color:"#FFFFFF",
      fontSize:18,
      lineHeight:30,
      fontWeight:"500" 
    }
})