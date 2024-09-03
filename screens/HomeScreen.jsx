import { View, Text,ScrollView,StyleSheet,Image,StatusBar} from 'react-native'
import { useSafeAreaInsets} from 'react-native-safe-area-context';
import Homescreen1 from '../components/Homescreen/Homescreen1';
import Homescreen2 from '../components/Homescreen/Homescreen2';
import Homescreen3 from '../components/Homescreen/Homescreen3';
import Homescreen4 from '../components/Homescreen/Homescreen4';
import Homescreen5 from '../components/Homescreen/Homescreen5';
import Homescreen7 from '../components/Homescreen/Homescreen7';


const HomeScreen = () => {

  const insets = useSafeAreaInsets();

  return (
    <>
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.containerStyle} showsVerticalScrollIndicator={false}>
        <View>
          <Image style={styles.image} source={require('../assets/images/main.png')}/>
          <View style={[styles.image,styles.overlay,{paddingTop:insets.top}]}>
              <Homescreen1/>
              <Homescreen2/>
          </View>
        </View>
        <Homescreen3/>
        <Homescreen4/>
        <Homescreen5/>
        <Homescreen7/>
      </ScrollView>
    </>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  scrollview:{
    flex:1,
    backgroundColor:"rgba(249, 249, 249, 1)"
  },
  containerStyle:{
    // flex:1,
  },
  image:{
    width:"100%",
    height:392,
    borderBottomRightRadius:100
  },
  overlay:{
    backgroundColor:"rgba(35, 100, 170,0.8)",
    position:"absolute",
    top:0
  }
})