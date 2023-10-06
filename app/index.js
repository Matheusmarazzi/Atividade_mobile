import {View, Text, StatusBar} from 'react-native';
import {Link} from 'expo-router';
import styles from './css/style';


export default function App(){
    return(
        
        <View style={styles.container}>
            <StatusBar backgroundColor={"#171715"} />
            <Text style={styles.Title}>Atividades Primeiro Bimestre</Text>
            <Link style={styles.Link} href="/Calculator">Calculator</Link>
            <Link style={styles.Link} href="/Count_people">Count</Link>
            <Link style={styles.Link} href="/Gas">Gas</Link>
            <Link style={styles.Link} href="/Profile">Profile</Link>
            <Link style={styles.Link} href="/Game">Game</Link>
            <Link style={styles.Link} href="/Form">Form</Link>
            <Link style={styles.Link} href="/Jobs">Jobs</Link>
            <Link style={styles.Link} href="/IMC">IMC</Link>
            <Link style={styles.Link} href="/AD">AD</Link>
            <Text style={[styles.Text, {paddingTop: '7%'} ]}>By Jorge Lucas and Matheus Marazzi</Text>
        </View>
    )
}