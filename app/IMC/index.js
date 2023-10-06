import {
    Text,
    SafeAreaView,
    TextInput,
    Button,
    Image,
    StatusBar
  } from 'react-native';
  
  import { useState } from 'react';
  import styles from './style'
  
  
  const images = {
    abaixoDoPeso: require('./img/abaixoDoPeso.jpeg'),
    pesoNormal: require('./img/pesoNormal.jpeg'),
    obeso: require('./img/sobrepeso.jpeg'),
    obesidadeMorbida: require('./img/obesidade.jpeg'),
    defaultImage: require('./img/default.jpeg'),
  };
  
  export default function IMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [imcImage, setImcImage] = useState(images.defaultImage);
  
    const calcularIMC = () => {
      const pesoFloat = parseFloat(peso);
      const alturaFloat = parseFloat(altura) / 100;
  
      if (pesoFloat && alturaFloat) {
        const imc = pesoFloat / (alturaFloat * alturaFloat);
        setResultado(imc.toFixed(2));
        setIMCStatusImage(imc.toFixed(2));
      } else {
        setResultado(null);
      }
    };
  
    const setIMCStatusImage = (imc) => {
      if (imc < 18.5) {
        setImcImage(images.abaixoDoPeso);
      } else if (imc >= 18.5 && imc < 24.9) {
        setImcImage(images.pesoNormal);
      } else if (imc >= 25 && imc < 29.9) {
        setImcImage(images.obeso);
      } else {
        setImcImage(images.obesidadeMorbida);
      }
    };
  
    const getIMCMessage = (imc) => {
      if (imc < 18.5) {
        return 'Status: Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        return 'Status: Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        return 'Status: Sobrepeso';
      } else if (imc >= 30 && imc < 34.9) {
        return 'Status: Obesidade Grau I';
      } else if (imc >= 35 && imc < 39.9) {
        return 'Status: Obesidade Grau II';
      } else {
        return 'Status: Obesidade Grau III';
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#171715"} />
        <Image
          source={imcImage ?? images.defaultImage}
          style={styles.image}
          width={100}
          height={100}
        />
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
        <Button title="Calcular IMC" onPress={calcularIMC} />
        {resultado && (
          <>
            <Text style={styles.resultado}>IMC: {resultado}</Text>
            <Text style={styles.resultado}>{getIMCMessage(resultado)}</Text>
          </>
        )}
      </SafeAreaView>
    );
  }
  
  