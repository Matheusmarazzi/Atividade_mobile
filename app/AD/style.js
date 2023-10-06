import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#171715'
    },
    title: {
      paddingTop: 100,
      fontSize: 24,
      color: '#fff'
    },
    content: {
      alignItems: 'center',
    },
    scrollViewContent: {
      alignItems: 'center',
    },
    box: {
      backgroundColor: 'white',
      height: 300,
      width: 250,
      margin: 10,
      padding: 20,
      alignItems: 'center',
      color: '#171715',
      justifyContent: 'center'
    },
    imagem: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    descricao: {
      fontSize: 18,
      color: '#171715',
      marginVertical: 5,
    },
    preco: {
      fontSize: 16,
      color: '#171715',
    },
  });