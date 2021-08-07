import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        margin:10,
        padding:10,
        borderRadius:15
    },
    header:{
        marginBottom:10,
        flex:1,
        flexDirection:"row"
    },
    username:{
        flex:1,
        fontSize:15
    },
    date:{
        fontSize:15,
        fontStyle:"italic"
    },
    text_container:{
        flex:2,
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
})