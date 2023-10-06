import {Text, ScrollView, View, FlatList, StatusBar} from 'react-native';
import data from './data.json';
import styles from './style';

export default function Jobs(){
    return(
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={"#171715"} />
            <Text style={{fontSize: 20, color:"#FFF", textAlign: "center"}}>Vagas</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                <View style={styles.box}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.salario}</Text>
                    <Text style={styles.text}>{item.descricao}</Text>
                    <Text style={styles.text}>{item.contato}</Text>

                </View>
                
            }
                
            />
        </ScrollView>
    )

}