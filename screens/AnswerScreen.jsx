import { View, Text,StyleSheet,ScrollView,ImageBackground } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Answerscreen1 from '../components/Answerscreen/Answerscreen1';
import Answerscreen2 from '../components/Answerscreen/Answerscreen2';



const AnswerScreen = () => {

  const insets = useSafeAreaInsets();


  return (
    <ImageBackground source={(require('../assets/images/background.jpg'))} style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={{paddingTop:insets.top}}>
          <Answerscreen1/>
          <Answerscreen2/>
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
    }
})