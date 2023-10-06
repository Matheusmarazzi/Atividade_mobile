
import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity,View, StatusBar } from 'react-native';
import styles from "./style";

export default function Count_people() {
  const [count, setCount] = useState(0);

  function addPeople(){
    setCount(count+1)
  }
  function removePeople(){
    count > 0 ? setCount(count-1):count;
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor='#171715'  />

      <Text style={styles.text}>{count == 1 ? ( count +' Person'):( count + ' People')  } </Text>
      <View style={styles.divButton}>
        <TouchableOpacity style={[styles.button, {backgroundColor:'#3030FF'}]} onPress={addPeople}>
          <Text style={[styles.text, {fontSize:20, textAlign:'center'}]}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor:'#FF3030'}]} onPress={removePeople}>
          <Text style={[styles.text, {fontSize:20, textAlign:'center'}]}>Remove</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}


