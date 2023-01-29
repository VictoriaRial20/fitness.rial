import { Header } from './components/index';
import { View } from 'react-native';
import { styles } from './styles';
const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Fitness Group"/>
    </View>
  );
}

export default App;

