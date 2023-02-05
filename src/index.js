import { ActivityIndicator, View } from 'react-native';

import AppNavigation from './navigation';
//import { Header } from './components'; <Header title="FITNESS GROUP" />
import { styles } from './styles';
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    'AbhayaLibre-bold': require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    'AbhayaLibre-Extrabold': require('../assets/fonts/AbhayaLibre-ExtraBold.ttf'),
    'AbhayaLibre-Medium': require('../assets/fonts/AbhayaLibre-Medium.ttf'),
    'AbhayaLibre-Regular': require('../assets/fonts/AbhayaLibre-Regular.ttf'),
    'AbhayaLibre-SemiBold': require('../assets/fonts/AbhayaLibre-SemiBold.ttf'),
  });
  
  if (!loaded) {
    return (
      <View style={styles.containerloader}>
        <ActivityIndicator size="large" color='#507DBC' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
}

export default App;

