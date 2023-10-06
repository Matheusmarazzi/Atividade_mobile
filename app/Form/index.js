import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StatusBar
} from 'react-native';
import styles from './style';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function Form() {
  const [gender, setGender] = useState('Feminino');
  const [name, setName] = useState('Não informado');
  const [age, setAge] = useState(0);
  const [school, setSchool] = useState('Ensino Fundamental Incompleto');
  const [limit, setLimit] = useState(0);
  const [isBrazilian, setIsBrazilian] = useState(false);
  const [finishedForm, setIsFinishedForm] = useState(false);

  let gender_options = [
    { id: 'Feminino', nome: 'Feminino' },
    { id: 'Masculino', nome: 'Masculino' },
    { id: 'Outro', nome: 'Outro' },
  ];

  let school_options = [
    {
      id: 'Ensino Fundamental incompleto',
      nome: 'Ensino Fundamental incompleto',
    },
    { id: 'Ensino Fundamental completo', nome: 'Ensino Fundamental completo' },
    { id: 'Ensino Médio incompleto', nome: 'Ensino Médio incompleto' },
    { id: 'Ensino Médio completo', nome: 'Ensino Médio completo' },
    { id: 'Ensino Superior incompleto', nome: 'Ensino Superior incompleto' },
    { id: 'Ensino Superior completo', nome: 'Ensino Superior completo' },
  ];

  const handleName = (value) => {
    setName(value);
  };

  const handleAge = (value) => {
    const formattedValue = value.replace(/[^0-9]/g, '');
    setAge(formattedValue);
  };

  const handleOnPress = () => {
    setIsFinishedForm(true);
  };

  const genderItem = gender_options.map((value, id) => {
    return <Picker.Item key={id} value={value.id} label={value.nome} />;
  });

  const schoolItem = school_options.map((value, id) => {
    return <Picker.Item key={id} value={value.id} label={value.nome} />;
  });

  const toggleSwitch = () => setIsBrazilian(!isBrazilian);

  const handleSlider = (value) => {
    setLimit(value);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#171715"} />
      <Text style={styles.logo}>Abertura de Conta</Text>
      <Text style={styles.text}>
        Nome:
        <TextInput style={styles.TextInputStyle} onChangeText={handleName} />
      </Text>
      <Text style={styles.text}>
        Idade:
        <TextInput style={styles.TextInputStyle} onChangeText={handleAge} />
      </Text>
      <Text style={styles.text}>
        Sexo:
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
          {genderItem}
        </Picker>
      </Text>
      <Text style={styles.text}>
        Escolaridade:
        <Picker
          selectedValue={school}
          onValueChange={(itemValue, itemIndex) => setSchool(itemValue)}>
          {schoolItem}
        </Picker>
      </Text>
      <Text style={styles.text}>
        Limite:
        <Slider
          minimumValue={0}
          maximumValue={100}
          style={{
            paddingStart: '10px',
            width: "70%",
          }}
          step = {5}
          onValueChange={handleSlider}
        />
      </Text>
      <Text style={styles.text}>
        Brasileiro:{' '}
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isBrazilian ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isBrazilian}
        />
      </Text>
      <Button
        onPress={handleOnPress}
        title="Confirmar"
        color="#000"
        accessibilityLabel="Learn more about this purple button"
      />

      {finishedForm && (
        <>
          <Text style={styles.subtitle}>Dados Informados</Text>
          <Text style={styles.text}>Nome: {name}</Text>
          <Text style={styles.text}>Idade: {age === 0 ? 'Não informado' : age}</Text>
          <Text style={styles.text}>Sexo: {gender}</Text>
          <Text style={styles.text}>Esolaridade: {school}</Text>
          <Text style={styles.text}>Limite: {limit}</Text>
          <Text style={styles.text}>Brasileiro: {isBrazilian?"Sim":"Não"}</Text>
        </>
      )}
    </View>
  );
}
export default Form;
