import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';



const Qusetionscreen4 = ({obj,letter,questionId,selectAnswer,pressed,correct,id}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{selectAnswer(id,obj.item)}} style={[styles.answer, pressed.current == true && correct.current == true && questionId.current == id && {backgroundColor:'#009028',borderWidth:4,borderColor:"#00EA62"}, pressed.current == true && correct.current == false && questionId.current == id && {backgroundColor:"#C30012",borderWidth:4,borderColor:"#F69798"}]}> 
        <Text style={styles.answerMark}>{letter}.</Text>
        <View style={styles.pickBox}>
            <Text style={styles.pickAnswer}>{obj.item}</Text>
        </View>
        <View>
            {pressed.current == true && correct.current == false && questionId.current == id && <MaterialIcons name="cancel" size={24} color="#FFCBD2" />}
            {pressed.current == true && correct.current == true && questionId.current == id && <Ionicons name="checkmark-circle" size={24} color="#62F694" />}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Qusetionscreen4

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20, 
        marginTop:10,
    },
    answer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        minHeight:66,
        backgroundColor:"#F9F9F9",
        borderRadius:35,
        paddingHorizontal:30,
        marginBottom:30
    },
    answerMark:{
        fontSize:18,
        lineHeight:20,
        fontWeight:"500",
        fontFamily:"spaceG",
        color:"#1B1B1B" 
    },
    pickAnswer:{
        fontFamily:"spaceG",
        fontSize:16,
        lineHeight:20,
        fontWeight:"400",
        color:"#1B1B1B"
    },
    pickBox:{
        marginHorizontal:20
    }
})