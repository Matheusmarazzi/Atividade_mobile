
import {  Text, SafeAreaView, Image } from 'react-native';
import styles from "./style";


function Profile() {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.photo} source={{
          uri:'https://sm.ign.com/ign_br/screenshot/default/black-clover-asta-dark-1131959-1280x0_6mt7.jpg'
        }}/>
        <Text style={styles.texto}>Nome: Asta</Text>
        <Text style={styles.texto}>Classe: Plebeu sem magia</Text>
        <Text style={styles.texto}>Magia: Não possui</Text>
        <Text style={styles.texto}>Força: 100000</Text>
        <Text style={styles.texto}>Grimório: 5 folhas</Text>
        <Text style={styles.texto}>Cidade natal: Richita na Região Esquecida</Text>
        <Text style={styles.texto}>Esquadrão: Touros negros</Text>
    </SafeAreaView>
  );
}



export default Profile;
