import { View, Text,StyleSheet } from 'react-native'
import { useRef,useEffect } from 'react'
import LottieView from 'lottie-react-native';


const Answerscreen3 = ({passed}) => {

    const animation1 = useRef(null);
    const animation2 = useRef(null);

    useEffect(() => {

        if(passed == true){
            animation1.current?.play();
        }
       
        if(passed == false){
            animation2.current?.play();
        }

    }, []);
    

  return (
    <View style={styles.container}>
      <View style={styles.emojiBox}>
        <View style={styles.smileBox}>
            {passed == true && <LottieView
                autoPlay
                ref={animation1}
                style={{
                width: 110,
                height: 102,
                backgroundColor: 'transparent',
                }}
                source={require('../../assets/emojis/pass.json')}
            />
            }
            {passed == false && <LottieView
                autoPlay
                ref={animation2}
                style={{
                width: 100,
                height: 90,
                backgroundColor: 'transparent',
                }}
                source={require('../../assets/emojis/fail.json')}
            />
            }
        </View>
        <Text style={styles.luck}>Better luck next time</Text>
        {passed == true && <Text style={styles.youWin}>Congratulations You Won 🎉</Text>}
        {passed == false &&<Text style={styles.youWin}>Sorry you Didn’t win</Text>}
      </View>
    </View>
  )
}

export default Answerscreen3

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:40,
        paddingHorizontal:20
    },
    emojiBox:{
        backgroundColor:"rgba(223, 249, 255, 1)",
        height:256,
        width:"100%",
        borderWidth:4,
        borderRadius:10,
        borderColor:"rgba(0, 203, 247, 1)",
        padding:10
    },
    smileBox:{
        flexDirection:"row",
        justifyContent:"center"
    },
    luck:{
        fontSize:14,

        lineHeight:20,
        fontWeight:"500",
        fontFamily:"spaceG",
        textAlign:"center",
        marginTop:10
    },
    youWin:{
        fontSize:18,
        lineHeight:20,
        fontWeight:"500",
        fontFamily:"spaceG",
        color:"rgba(0, 0, 0, 1)",
        textAlign:"center",
        marginTop:20
    }
})