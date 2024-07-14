import { Text, View, TextInput, Pressable, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Participant } from '../components/participant';
import { useState, useEffect } from 'react';




export default function HomeScreen() {
  const [participants, setParticipants] = useState(['Jorge', 'Noah'])
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      Alert.alert('Participante já adicionado', 'O participante Jorge já foi adicionado');
      return;
    }
    if (participantName === '') {
      Alert.alert('Campo obrigatório', 'O campo de participante é obrigatório');
      return;
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');

  }

  function handleParticipantRemove(name: string): void {
    // Pergunta se deseja remover o participante
    Alert.alert(
      `Remover participante`,
      `Deseja remover o participante ${name}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => {
            console.log(`Participante ${name} removido`);
            // Remove o participante do array participants

            setParticipants(participants.filter((participant: string) => participant !== name));

            Alert.alert('Participante removido', `O participante ${name} foi removido com sucesso`);
          },
        },
      ],
    );
  }









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
          onChangeText={setParticipantName}
          value={participantName}
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
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
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