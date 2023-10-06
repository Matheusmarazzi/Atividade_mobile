
import { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, StatusBar } from 'react-native';
import styles from './style'

export default function Gas() {
  const [gas, setGas] = useState(0);
  const [alc, setAlc] = useState(0);
  const [result, setResult] = useState(0);
  const [image, setImage] = useState('https://www.terra.com.br/economia/infograficos/alcool-x-gasolina/img/gasolina.gif');


  useEffect(()=>{
    setImage('https://www.terra.com.br/economia/infograficos/alcool-x-gasolina/img/gasolina.gif');
    setResult(0)
    if (alc!=0 || gas!=0){
      setResult(alc/gas);
      result < 0.7 ? setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkFKpOPXhQsiB5QTDqNpM5Ckhw1vb_HOW4w&usqp=CAU'):setImage('https://static.manualdaquimica.com/conteudo/images/no-brasil-materia-prima-para-producao-etanol-cana-acucar-547f8416cddb8.jpg')
    } 
    

  }, [alc, gas])
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#171715"} />
      <Text style={styles.title}>Gasolina vs Alcool</Text>
      <Image style={styles.image} source={{uri:image}} />
      <TextInput style={styles.input} onChangeText={setGas} placeholder='Digite o valor da gasolina'/>
      <Text style={{fontSize:30, color:'white'}}>X</Text>
      <TextInput style={styles.input} onChangeText={setAlc} placeholder='Digite o valor do alcool'/>
      <Text style={styles.title}>{ result !=0 ?result < 0.7?'vai de alcool':'vai de gasolina':'Digite dois valores'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

