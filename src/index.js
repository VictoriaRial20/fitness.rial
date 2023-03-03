import { ActivityIndicator, View } from 'react-native';

import AppNavigation from './navigation';
import { Provider } from 'react-redux';
import { init } from "./db";
import store from './store';
import { styles } from './styles';
import { useFonts } from 'expo-font';

init()
  .then(()=>{
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed");
    console.log(err);
  });

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
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </Provider>
  );
}

export default App;

