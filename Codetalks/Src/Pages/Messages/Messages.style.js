import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors/Colors"
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ff9800"
    },
    header:{
        margin:10,
        padding:10,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 15,
        borderColor:"white",
        alignItems:"center"
    },
    header_title:{
        fontSize:20,
        color:"white"
    }
})