import { Image, StyleSheet, Text, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { styles } from './styles';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={stylesReact.reactLogo}
        />
      }>
      <ThemedView style={stylesReact.titleContainer}>
        <ThemedText type="title">Welcome Vida! Te amoooo</ThemedText>

        <HelloWave />
      </ThemedView>
      <ThemedView style={stylesReact.stepContainer}>
        
          <Text style={styles.title}>
            Nome do evento
          </Text>
          <Text style={styles.date}>
            Domingo, 7 de Julho de 2024.
          </Text>
          <TextInput style={styles.input}
          />
       
      </ThemedView>
    </ParallaxScrollView>
  );
}

const stylesReact = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
