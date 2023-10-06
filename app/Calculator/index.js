
import { useEffect, useState } from 'react';
import { Text, TextInput, View, StatusBar } from 'react-native';
import styles from './style';
import {Link} from 'expo-router';


export default function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [result, setResult] = useState('');

  useEffect(()=>{
    setResult(val1*val2);

  }, [val1, val2])


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#171715"} />
      <Text style={styles.title}>Multiplicador de números</Text>
      <TextInput style={styles.input} onChangeText={setVal1} placeholder='Digite o 1° número'/>
      <Text style={{fontSize:30, color:'white'}}>X</Text>
      <TextInput style={styles.input} onChangeText={setVal2} placeholder='Digite o 2° número'/>
      <Text style={styles.result}>{result?`Resultado: ${result}`:'Digite um número'}</Text>
      <StatusBar style="auto" />
      <Link href='/'>Voltar</Link>
    </View>
  );
}


