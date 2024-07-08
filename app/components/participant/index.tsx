import { View, Text, TextInput, Pressable } from 'react-native';


import { styles } from './styles';

type ParticipantProps = {
  nameParticipant: string;
  onRemove: () => void;
}




export function Participant({ nameParticipant, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {nameParticipant}
      </Text>
    
          <Pressable
            style={styles.button}
            onPress={onRemove}
            >
            <Text style={styles.textButton}>
              -
            </Text>
      </Pressable>
    </View>
  );
}