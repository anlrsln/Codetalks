import { StyleSheet,Dimensions} from "react-native";


export default StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:5,
        padding:10,
        alignItems:"center",
        height:Dimensions.get("window").height/4,
        width:Dimensions.get("window").width/2.2,
        borderWidth:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15,
        borderColor:"#e0e0e0"
    },
    room_name:{
        fontSize:30,
        color:"#ff6f00"
    }
})