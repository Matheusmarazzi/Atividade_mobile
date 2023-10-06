import { View, Text, Image, StatusBar } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";



export default function Game(){
    const [number,setNumber ] = useState(0);
    const [player1,setPlayer1 ] = useState(0);
    const [player2,setPlayer2 ] = useState(0);

    function getNumber(){
        setNumber(Math.floor(Math.random()*11));
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={"#171715"} />
            <Text style={styles.title}>Jogo do N° Aleatório</Text>
            <Image style={styles.img} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxSXd7kzs31YIzpZ5gfLB_vJ5ogDD_Dm2duo77SIhbnB2WdxzSYQwwPUBYyyHvvws5mI&usqp=CAU"}}/>
            <Text style={styles.text}>Pense em um N° de 0 a 10</Text>
            <Text style={[styles.title, {borderBottomWidth: 2,borderColor: "#FFF",}]}>{number}</Text>
            <TouchableOpacity style={styles.button} onPress={getNumber}><Text style={styles.text}>Descobrir</Text></TouchableOpacity>
            <Text style={styles.title}>Pontuação</Text>
            <View style={styles.point}>
                <View style={styles.pointPlayer1}>
                    <Text style={[styles.pointText, {color: "red"}]}>{player1}</Text>
                    <TouchableOpacity style={[styles.buttonAdd, {backgroundColor:"red"}]} onPress={()=>setPlayer1(player1+1)}><Text style={styles.text}>+</Text></TouchableOpacity>
                </View>
                
                <View style={styles.pointPlayer2}>
                    <Text style={[styles.pointText, {color: "blue"}]}>{player2}</Text>
                    <TouchableOpacity style={[styles.buttonAdd, {backgroundColor:"blue"}]} onPress={()=>setPlayer2(player2+1)}><Text style={styles.text}>+</Text></TouchableOpacity>
                </View>           
            </View>
        </View>
    )
}