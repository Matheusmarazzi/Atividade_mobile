import React from 'react';
import { View, ScrollView, SafeAreaView, Text, Image, StatusBar } from 'react-native';
import styles from './style';

function App() {
  const produtos = [
    {
      imagem: require('./img/makita.jpeg'),
      descricao: 'Makita, corta até diamante, o difícil é ter um diamante.',
      preco: 'R$ 100.000,00'
    },
    {
      imagem: require('./img/snack-icon.jpeg'),
      descricao: 'Literalmente um aplicativo, promoção hein',
      preco: 'R$ 150.000,00'
    },
    {
      imagem: require('./img/celular.jpeg'),
      descricao: 'Celular genérico da samsung que ninguém liga',
      preco: 'R$1500,00'
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={"#171715"} />
      <View style={styles.content}>
        <Text style={styles.title}>Anúncios</Text>
      </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
          {produtos.map((produto, index) => (
            <View style={styles.box} key={index}>
              <Image source={produto.imagem} style={styles.imagem} />
              <Text style={styles.descricao}>{produto.descricao}</Text>
              <Text style={styles.preco}>{produto.preco}</Text>
            </View>
          ))}
        </ScrollView>
        
      
    </SafeAreaView>
  );
}


export default App;