import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import StoreScreen from '../screens/StoreScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTabBarProps, BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedStyle, withTiming, useDerivedValue } from 'react-native-reanimated'
import {Pressable,StatusBar,StyleSheet,View,Text,LayoutChangeEvent} from 'react-native'
import React, { useEffect, useReducer, useRef } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';





//the tab bar animation was inspired by MaximilianDietel03 react-native-custom-tab-bar

const Tab = createBottomTabNavigator();
const AnimatedSvg = Animated.createAnimatedComponent(Svg)

function Tab_navigator() {

  return (
    <Tab.Navigator  tabBar={(props) => <AnimatedTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,tabBarIcon:({focused,color,size})=><AntDesign name="home" size={20} color="white" />,tabBarLabel:"Home"}}/>
      <Tab.Screen name="Wallet" component={WalletScreen} options={{tabBarIcon:({focused,color,size})=><Ionicons name="wallet-outline" size={24} color="white" />,tabBarLabel:"Wallet"}}/>
      <Tab.Screen name="Store" component={StoreScreen} options={{tabBarIcon:({focused,color,size})=><Ionicons name="storefront-outline" size={24} color="white" />,tabBarLabel:"Store"}}/>
      <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} options={{tabBarIcon:({focused,color,size})=><MaterialCommunityIcons name="trophy-outline" size={20} color="white" />,tabBarLabel:"LeaderBoard"}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon:({focused,color,size})=><Ionicons name="settings-outline" size={20} color="white" />,tabBarLabel:"Settings"}}/>
    </Tab.Navigator>
  );
}


const AnimatedTabBar = ({ state:{ index: activeIndex, routes }, navigation, descriptors }) => {
  const insets = useSafeAreaInsets()

  const reducer = (state, action) => {
    return [...state, { x: action.x, index: action.index }]
  }

  const [layout, dispatch] = useReducer(reducer, [])

  const handleLayout = (event, index) => {
    dispatch({ x: event.nativeEvent.layout.x, index })
  }


  const xOffset = useDerivedValue(() => {
    
    if (layout.length !== routes?.length) return 0;
    return [...layout].find(({ index }) => index === activeIndex)?.x - 25
  }, [activeIndex, layout])

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    }
  })

  return (
    <View style={[styles.tabBar, { paddingBottom:insets.bottom }]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}
      >
        <Path
          fill="rgba(255, 255, 255, 1)"
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const active = index === activeIndex
          const { options } = descriptors[route.key]

          return (
            <TabBarComponent
              key={route.key}
              active={active}
              options={options}
              onLayout={(e) => handleLayout(e, index)}
              onPress={() => navigation.navigate(route.name)}
            />
          )
        })}
      </View>
    </View>
  )
}

const TabBarComponent = ({ active, options, onLayout, onPress }) => {


  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 })
        }
      ]
    }
  })

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
      backgroundColor: withTiming(active ? "rgba(42, 117, 188, 1)":"transparent", { duration: 250 }),
      height: withTiming(active ? 60 : 20, { duration: 250 }),
      marginTop: withTiming(active ? 0 : 40, { duration: 250 }),
      
    }
  })

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View style={[styles.iconBox,animatedIconContainerStyles]}>
        {options.tabBarIcon ? options.tabBarIcon({}) : <Text>?</Text>}
      </Animated.View>
      <Text style={styles.iconText} numberOfLines={1}>
        {options.tabBarLabel ? options.tabBarLabel : <Text>?</Text>}
      </Text>
    </Pressable>
  )
}




export default Tab_navigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'rgba(42, 117, 188, 1)',
  },
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  component: {
    height:100,
    width:60,
    marginTop: -5,
  },
  componentCircle: {
    height:60,
    borderRadius: 30,
    backgroundColor: 'rgba(42, 117, 188, 1)',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 36,
    width: 36,
  },
  iconBox:{
    width:"100%",
    height:60,
    backgroundColor:"rgba(42, 117, 188, 1)",
    borderRadius:50,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  iconText:{
    textAlign:"center",
    marginTop:10,
    fontSize:10,
    fontWeight:"700",
    fontFamily:"dmVariable",
    color:"white"
  }
})