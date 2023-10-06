import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:'#171515',
        paddingTop:'10%',
      },
      title:{
        fontSize: 30,
        color: "#FFF",
        marginVertical: 10
      },
      img:{
        width: "60%",
        height: "30%",
        borderRadius: 8,
        marginVertical: 10
    },
    text:{
        fontSize: 20,
        color: "#FFF",
        

    },
    button:{
        backgroundColor: '#4030AA',
        paddingHorizontal: 90,
        paddingVertical: 50,
        borderRadius: 8,

    }, 
    point:{
        backgroundColor:'#171515',
        flexDirection:'row',
        width: "100%",
        justifyContent: 'space-between'
    },
    pointPlayer1:{
        width: '49%',
        alignSelf: 'flex-start'
    },
    pointPlayer2:{
        width: '49%',
        
    },
    buttonAdd:{
        padding: 10,
        borderRadius:10,
        alignSelf: 'center',
        marginTop: 5
    },
    pointText:{
        fontSize: 20,
        textAlign: 'center'
    }
})