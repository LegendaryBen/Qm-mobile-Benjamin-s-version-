import { View, Text,StyleSheet } from 'react-native'




const Answerscreen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>Results</Text>
    </View>
  )
}

export default Answerscreen1

const styles = StyleSheet.create({ 
    container:{
        paddingHorizontal:20,
        marginTop:50
    },
    result:{
        textAlign:"center",
        fontFamily:"dmVariable",
        fontSize:22,
        lineHeight:44,
        fontWeight:"700",
        color:"rgba(249, 249, 249, 1)"
    }
})