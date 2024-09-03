import { View, Text, StyleSheet,FlatList } from 'react-native'
import Homescreen6 from './Homescreen6';

const Homescreen5 = () => {

    const DATA = [
        {
          id:1,
          title: 'Joe',
          image:require('../../assets/images/joe.png'),
          amount:"N5000",
          back:"rgba(242, 242, 242, 1)"
        },
        {
          id:2,
          title: 'Sarah',
          image:require('../../assets/images/sarah.png'),
          amount:'N5000',
          back:"rgba(175, 240, 255, 1)"
        },
        {
          id:3,
          title: 'Hanax',
          image:require('../../assets/images/hanax.png'),
          amount:'N5000',
          back:"rgba(196, 251, 210, 1)"
        },
        {
            id:4,
            title: 'Inioluwa',
            image:require('../../assets/images/oluwa.png'),
            amount:'N5000',
            back:"rgba(255, 203, 210, 1)"
        },
        {
            id:5,
            title: 'Liz',
            image:require('../../assets/images/liz.png'),
            amount:'N5000',
            back:"background: rgba(255, 246, 197, 1)"
        },
    ];



  return (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={({item}) => <Homescreen6 items={item}/>}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default Homescreen5

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20
    }
})