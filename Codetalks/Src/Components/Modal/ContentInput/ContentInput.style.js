import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    modal:{
        margin:0,
        justifyContent:"flex-end",

    },
    container:{
        padding:5,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        marginHorizontal:10,
        backgroundColor:"white",
        height:Dimensions.get("window").height/3
        //alignItems:"center"
    },
    input_container:{
        flex:1
    },
    input:{
        justifyContent:"flex-end"
    }
})