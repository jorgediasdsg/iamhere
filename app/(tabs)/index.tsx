import { Text, View, TextInput, Pressable, FlatList, Alert } from 'react-native';

import { styles } from './styles';
import { Participant } from '../components/participant';
import { useState, useEffect } from 'react';




export default function HomeScreen() {
  const [participants, setParticipants] = useState(['Jorge', 'Noah'])




  function handleParticipantAdd() {
    // verifica se o participante já foi adicionado
    console.log(" Adicionando participante");
    if (participants.includes('Jorge2')) {
      Alert.alert('Participante já adicionado', 'O participante Jorge já foi adicionado');
      return;
    }



      setParticipants(prevState => [...prevState, 'Jorge2']);



    // setParticipants(prevState => [...prevState, 'Jorge2']);

    // Adiciona o participante ao array participants
    // setParticipants([...participants, 'Jorge2']);

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