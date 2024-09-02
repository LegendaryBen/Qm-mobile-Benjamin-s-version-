import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import StoreScreen from '../screens/StoreScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';



const Tab = createBottomTabNavigator();

function Tab_navigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


export default Tab_navigator;
