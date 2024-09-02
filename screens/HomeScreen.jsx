import { View, Text,ScrollView,StyleSheet,Image,StatusBar} from 'react-native'
import { useSafeAreaInsets} from 'react-native-safe-area-context';
import Homescreen1 from '../components/Homescreen/Homescreen1';






const HomeScreen = () => {

  const insets = useSafeAreaInsets();

  return (
    <>
      {/* <StatusBar /> */}
      <ScrollView style={styles.scrollview} contentContainerStyle={styles.containerStyle}>
        <View>
          <Image style={styles.image} source={require('../assets/images/main.png')}/>
          <View style={[styles.image,styles.overlay,{paddingTop:insets.top}]}>
              <Homescreen1/>
          </View>
        </View>
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
    flex:1,
  },
  image:{
    width:"100%",
    height:392,
    borderBottomRightRadius:100
  },
  overlay:{
    backgroundColor:"rgba(35, 100, 170,0.5)",
    position:"absolute",
    top:0
  }
})