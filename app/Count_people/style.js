import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171715',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'#f1f1f1',
      fontSize: 28
  
    },
    divButton:{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between'
    },
    button:{
      padding: 20,
      borderRadius: 8,
      width:"50%",
      marginHorizontal: 10
      
  
    }
  });