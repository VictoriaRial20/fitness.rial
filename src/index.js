import { ActivityIndicator, View } from 'react-native';
import { Login, Principal } from './screens';

import { Header } from './components';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import { useState } from 'react';

const App = () => {
  const [loaded] = useFonts({
    'AbhayaLibre-bold': require('../assets/fonts/AbhayaLibre-Bold.ttf'),
    'AbhayaLibre-Extrabold': require('../assets/fonts/AbhayaLibre-ExtraBold.ttf'),
    'AbhayaLibre-Medium': require('../assets/fonts/AbhayaLibre-Medium.ttf'),
    'AbhayaLibre-Regular': require('../assets/fonts/AbhayaLibre-Regular.ttf'),
    'AbhayaLibre-SemiBold': require('../assets/fonts/AbhayaLibre-SemiBold.ttf'),
  });
  const [selectLogin, setSelectLogin] = useState(false);

  const onHandleLogin = (showLogin) => {
    setSelectLogin(showLogin)
  }
  const Content = () =>
    selectLogin ? (<Login></Login>)
      : (<Principal onHandleLogin={onHandleLogin} />);


  if (!loaded) {
    return (
      <View style={styles.containerloader}>
        <ActivityIndicator size="large" color='#507DBC' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="FITNESS GROUP" />
      <Content />
    </View>
  );
}

export default App;

