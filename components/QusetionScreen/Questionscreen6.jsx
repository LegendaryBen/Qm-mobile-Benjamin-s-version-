import { View, Text,StyleSheet } from 'react-native'
import { useWindowDimensions,ActivityIndicator } from 'react-native';

const Questionscreen6 = () => {

  const details = useWindowDimensions()

  return (
    <View style={[styles.container,{height:details.height}]}>
       <ActivityIndicator size="large" />
    </View>
  )
}

export default Questionscreen6

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        padding:20
    }
})