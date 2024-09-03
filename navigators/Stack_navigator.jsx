import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab_navigator from './Tab_navigator';
import QustionsScreen from '../screens/QustionsScreen';



const Stack = createNativeStackNavigator();

function Stack_navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="TabHome" component={Tab_navigator} />
      <Stack.Screen name="Questions" component={QustionsScreen} />
    </Stack.Navigator>
  );
}


export default Stack_navigator