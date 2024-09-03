import { View, Text,ScrollView,StyleSheet,ImageBackground } from 'react-native'
import Questionscreen1 from '../components/QusetionScreen/Questionscreen1'




const QustionsScreen = () => {
  return (
    <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
      <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
        <Questionscreen1/>
      </ScrollView>
    </ImageBackground>
  )
}

export default QustionsScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scrollview:{
        flex:1,
        backgroundColor:"rgba(23, 71, 139, 0.7)"
    }
})