import { NavigationContainer } from '@react-navigation/native';
import Tab_navigator from './navigators/Tab_navigator';
import { useFonts } from 'expo-font';
import { SafeAreaProvider} from 'react-native-safe-area-context';


export default function App() {

  const [fontsLoaded] = useFonts({
    'spaceG': require('./assets/fonts/SpaceGrotesk-VariableFont_wght.ttf'),
    'dmVariable':require('./assets/fonts/DMSans-VariableFont_opsz,wght.ttf'),
    'dmItalic':require('./assets/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf')
  });


  if(!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab_navigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


