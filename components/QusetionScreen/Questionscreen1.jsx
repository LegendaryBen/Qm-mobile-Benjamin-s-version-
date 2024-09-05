import { View, Text,StyleSheet } from 'react-native';
import { useRef,useLayoutEffect,useState, useEffect,useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import QusetionScreen2 from './Questionscreen2';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Questionscreen3 from './Questionscreen3';
import Qusetionscreen4 from './Qusetionscreen4';
import { useNavigation } from '@react-navigation/native';


const Questionscreen1 = ({result}) => {


  const navigation = useNavigation()

  const questions = useRef(null);
  let pressed = useRef(false);
  const[tracker,setTracker] = useState(0);
  const timer = useRef(null);
  let count = useRef(0);
  const[counter,setCounter]=useState(0);
  let calculating = useRef(false);
  let checker = useRef(0)
  let good = useRef(0);
  let bad = useRef(0);
  let correct = useRef(false)
  let questionId = useRef(null);


  const insets = useSafeAreaInsets();

  let alphas = ["A","B","C","D"];
  const[arrMain,setArrMain] = useState([])


  const selectQuestion = ()=>{

    
    if(count.current == 10){

      calculating.current = true;

      if(pressed.current == true){

        if(correct.current == true){

          good.current = good.current + 1;

        }else{

          bad.current = bad.current + 1

        }

      }else{

        bad.current = bad.current + 1;

      }




      checker.current = checker.current + 1

      if( checker.current > result.length - 1){
        clearInterval(timer.current);
        navigation.navigate('Answer',{
          passed:good.current >= bad.current,
          good:good.current,
          bad:bad.current
        });
      }else{
        pressed.current = false
        calculating.current = false;
        correct.current = false;
        questionId.current = null;
        count.current = 0
        setCounter(count.current)
        setTracker((prev)=>prev+1)
      }


    }else{
        count.current = count.current+1
        setCounter(count.current)
    }

  }


  const selectAnswer = (id,ans)=>{

    if(calculating.current == false){

      if(pressed.current == false){

        pressed.current = true;
        questionId.current = id;

        if(result[tracker].correct_answer == ans){

          correct.current = true;

        }else{

          correct.current = false;

        }

      }

    }

  }

  useEffect(()=>{
    let arr = [];
    let data = [...result[tracker].incorrect_answers,result[tracker].correct_answer].map((item,i)=>{return{item,letter:alphas[i]}})
    let size = 4
    for(let i=0;i<4;i++){
      let random = Math.floor(Math.random()*size);
      arr.push(data[random])
      data.splice(random,1) 
      size--
    }
    setArrMain(arr)
  },[tracker])

  useEffect(()=>{

    questions.current = result;

    timer.current = setInterval(()=>{

      selectQuestion()

    },1000)

    return ()=>{
      clearInterval(timer.current);
    }

  },[])


  return (
    <View style={[{paddingTop:insets.top}]}>
      <View style={styles.timerBox}>
          <View style={styles.timeCont}>
            <MaterialCommunityIcons name="timer-outline" size={20} color="white" />
            <Text style={styles.timerText}>00.00.40</Text>
          </View>
          <QusetionScreen2 progress={((counter/10)*100)/100} value={counter}/>
          <View/>
      </View>
      <Questionscreen3 tracker={tracker} obj={result[tracker]}/>
      <View style={styles.chooseBox}>
        <Text style={styles.choose}>Choose  Correct  Option</Text>
      </View>
        {
          arrMain && (arrMain.map((item,i)=><Qusetionscreen4 key={i} letter={alphas[i]} obj={item} id={i} questionId={questionId} pressed={pressed} selectAnswer={selectAnswer} correct={correct}/>))
        }
    </View>
  )
}

export default Questionscreen1


const styles = StyleSheet.create({
    timerBox:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:20,
      alignItems:"center",
      marginTop:30
    },
    timeCont:{
      flexDirection:"row",
      alignItems:"center"
    },
    timerText:{
      fontFamily:"spaceG",
      fontSize:14,
      lineHeight:20,
      fontWeight:"400",
      color:"#FFFFFF"
    },
    chooseBox:{
      paddingHorizontal:20,
      marginTop:30 
    },
    choose:{
      fontFamily:"spaceG",
      color:"#FFFFFF",
      fontSize:18,
      lineHeight:30,
      fontWeight:"500" 
    }
})