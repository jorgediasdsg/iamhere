import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>
        Nome do evento
      </Text>
      <Text style={styles.date}>
        Domingo, 7 de Julho de 2024.
      </Text>
      <TextInput style={styles.input}
      />
    </View>
  )
}

