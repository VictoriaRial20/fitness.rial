import { Header } from './components';
import { Principal } from './screens';
import { View } from 'react-native';
import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="FITNESS GROUP"/>
      <Principal/>
    </View>
  );
}

export default App;

