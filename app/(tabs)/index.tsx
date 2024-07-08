import { Text, View, TextInput, Pressable, FlatList } from 'react-native';

import { styles } from './styles';
import { Participant } from '../components/participant';

function handleParticipantAdd() {
  console.log('Adicionar participante');
}

function handleParticipantRemove() { 
  console.log('Voce removeu um participante');
}

const participants = [
  { name: 'Jorge' },
  { name: 'K' },
  { name: 'Lucca' },
  { name: 'Vi' },
  { name: 'Noah' },
  { name: 'Sushi' },
  { name: 'Whisky' },
  { name: 'Nina' },
  { name: 'Nina1' },
  { name: 'Nina2' },
  { name: 'Nina3' },
  { name: 'Nina4' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>
        Nome do evento
      </Text>
      <Text style={styles.date}>
        Domingo, 7 de Julho de 2024.
      </Text>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Adicionar participante"
        />
        <Pressable
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.textButton}>
            +
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Participant
            key={item.name}
            nameParticipant={item.name}
            onRemove={handleParticipantRemove}
          />
        )}
      
        ListEmptyComponent={() => (
        
          <Text style={styles.listEmpty}>
            Nenhum participante cadastrado
          </Text>
        
        )}
      />
  
      </View>
  )
}