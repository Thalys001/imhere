import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = [
    'Thalys',
    'luiz',
    'Pedro',
    'Felipe',
    'Gabriel',
    'Rafael',
    'Raul',
    'Gustavo',
    'Eduardo',
    'Nathan',
    'Bruno',
    'Brendo'
  ]


  function handleParticipantAdd() {
    console.log('adicionar');
  }

  function handleParticipantRemove(name: string) {
    console.log(`remover ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 04 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove('Thalys')} />
          ))
        }
      </ScrollView>
    </View>
  )
}