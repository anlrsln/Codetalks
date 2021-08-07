import { StyleSheet } from "react-native";
import Colors from "../../../Styles/Colors/Colors"

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.mainOrange
    },
    header:{
        flex:1,
        alignItems:"center"
    },
    logo:{
        height:400,
        width:400,
        resizeMode:"contain"
    },
    form_container:{
        flex:1
    }
})