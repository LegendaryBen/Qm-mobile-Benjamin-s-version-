import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';



const Homescreen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarBox}>
        <Image source={require('../../assets/images/avatar.png')}/>
      </View>
      <View style={styles.edits}>
        <TouchableOpacity style={styles.eraseBox}>
            <View style={styles.eraser}>
                <MaterialCommunityIcons name="eraser" size={16} color="white" />
            </View>
            <Text style={styles.eraseText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.amountBox}>
            <Text style={styles.amountText}>
                ₦5,000.00
            </Text>
            <View>
                <AntDesign name="pluscircleo" size={16} color="rgba(23, 71, 139, 1)" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bell}>
            <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Homescreen1

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        paddingTop:20,
        alignItems:"center"
    },
    avatarBox:{
        width:40,
        height:40,
        borderRadius:50,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    eraser:{
        marginRight:5,

    },
    eraseBox:{
        flexDirection:"row",
        borderColor:"white",
        borderWidth:1,
        paddingHorizontal:3,
        paddingVertical:3,
        borderRadius:15,
        alignItems:"center"
    },
    eraseText:{
        fontFamily:"spaceG",
        color:"white",
        fontWeight:"700",
        fontSize:14,
        lineHeight:22
    },
    edits:{
        flexDirection:"row",
        alignItems:"center"
    },
    amountBox:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"rgba(228, 241, 250, 1)",
        paddingHorizontal:4,
        paddingVertical:4,
        borderRadius:17,
        marginLeft:10
    },
    amountText:{
        color:"rgba(23, 71, 139, 1)",
        fontSize:12,
        lineHeight:22,
        fontFamily:"spaceG",
        fontWeight:"700"
    },
    bell:{
        marginLeft:15
    }
})