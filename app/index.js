import {View, Text} from 'react-native';
import {Link} from 'expo-router';
import styles from './css/style';


export default function App(){
    return(
        <View style={styles.container}>
            <Text style={styles.Title}>Atividades Primeiro Bimestre</Text>
            <Link style={styles.Link} href="/Calculator">Calculator</Link>
            <Link style={styles.Link} href="/Count_people">Count</Link>
            <Link style={styles.Link} href="/Gas">Gas</Link>
            <Link style={styles.Link} href="/Profile">Profile</Link>
            <Link style={styles.Link} href="/Game">Game</Link>
            <Text style={[styles.Text, {paddingTop: '50%'} ]}>By Jorge Lucas and Matheus Marazzi</Text>
        </View>
    )
}