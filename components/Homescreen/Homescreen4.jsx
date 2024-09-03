import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Homescreen4 = () => {
  return (
    <View style={styles.gamersBox}>
      <Text style={styles.gamersText}>Top Gamers of the Day</Text>
    </View>
  )
}

export default Homescreen4

const styles = StyleSheet.create({
    gamersBox:{
      width:"100%",
      paddingHorizontal:20
    },
    gamersText:{
      color:"rgba(59, 59, 59, 1)",
      fontSize:16,
      lineHeight:24,
      fontWeight:'700',
      fontFamily:'spaceG'
    }
})