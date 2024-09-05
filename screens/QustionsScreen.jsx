import { View, Text,ScrollView,StyleSheet,ImageBackground } from 'react-native'
import Questionscreen1 from '../components/QusetionScreen/Questionscreen1'
import LoadingData from "../components/QusetionScreen/Questionscreen5"
import Questionscreen6 from '../components/QusetionScreen/Questionscreen6'
import { useEffect,useReducer,useState } from 'react'
import axios from 'axios';
import Questionscreen7 from '../components/QusetionScreen/Questionscreen7'


const initialState = {
  loading: true,
  error:false,
  data:[],
};

function dataFetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        data:[],
        loading: true,
        error:false,
      };
    case 'FETCH_SUCCESS':
      return {
        data:action.payload,
        loading: false,
        error:false
      };
    case 'FETCH_FAILURE':
      return {
        data:[],
        loading: false,
        error:true,
      };
    default:
      throw new Error(`Unsupported action type`);
  }
}



const QustionsScreen = ({navigation}) => {


  const fetchData = ()=>{

    const endpoint = 'https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986';
    dispatch({type:'FETCH_INIT'})

    return axios.get(endpoint)
      .then(response => {
        const data =  response.data.results.map(result => {
          return {
            type: decodeURIComponent(result.type),
            difficulty: decodeURIComponent(result.difficulty),
            category: decodeURIComponent(result.category),
            question: decodeURIComponent(result.question),
            correct_answer: decodeURIComponent(result.correct_answer),
            incorrect_answers: result.incorrect_answers.map(answer => decodeURIComponent(answer))
          };
        });
        dispatch({type:'FETCH_SUCCESS',payload:data})
      })
      .catch(error => {
        dispatch({type:'FETCH_FAILURE'})
        console.log(error)
      });

  }


  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
  const[goBack,setGoBack] = useState(false);

  useEffect(()=>{

    if(goBack == false){

      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      })

    }
   
    fetchData()
 
  },[])


  if(state.loading == true && state.data.length == 0 && state.error == false){

    return (
      <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
        <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
          <Questionscreen6/>
        </ScrollView>
      </ImageBackground>
    )


  }else if(state.loading == false && (state.data.length != 0) && state.error == false){

    return (
      <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
        <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
          <Questionscreen1 result={state.data}/>
        </ScrollView>
      </ImageBackground>
    )

  }else if(state.loading == false && (state.data.length == 0) && state.error == false){

    return (
      <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
        <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
          <Questionscreen7 func={setGoBack}/>
        </ScrollView>
      </ImageBackground>
    )

  }else if(state.loading == false && state.data.length == 0 && state.error == true){

    return (
      <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
        <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
          <LoadingData retry={fetchData}/>
        </ScrollView>
      </ImageBackground>
    )

  }

}

export default QustionsScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scrollview:{
        flex:1,
        backgroundColor:"rgba(23, 71, 139, 0.7)"
    }
})