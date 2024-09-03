import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Homescreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.waveBox}>
        <View style={styles.waveTextBox}>
            <Text style={styles.waveText}>Hello John</Text>
        </View>
        <MaterialCommunityIcons name="hand-wave" size={18} color="rgba(255, 220, 93, 1)" />
      </View>
      <View style={styles.earn}>
        <Text style={styles.earnText}>Let’s play and Earn</Text>
      </View>
    </View>
  )
}

export default Homescreen2

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:30
    },
    waveBox:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:7
    },
    waveTextBox:{
        marginRight:10
    },
    waveText:{
        fontSize:24,
        lineHeight:22,
        fontWeight:"700",
        fontFamily:"dmVariable",
        color:"white"
    },
    earn:{
        color:"white",
    },
    earnText:{
        color:"white",
        fontFamily:"spaceG",
        fontSize:14,
        lineHeight:16,
        fontWeight:"400"
    }
})