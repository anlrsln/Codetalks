import { StyleSheet } from "react-native";

const common_styles={
    container:{
        margin:10,
        padding:3,
        backgroundColor:"white",
        alignItems:"center",
        borderRadius:15
    },
    text_container:{
        flexDirection:"row",
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"black"
    }
}

export default {
    primary:StyleSheet.create({
        ...common_styles,
        container:{
            ...common_styles.container,
            backgroundColor:"#ff9800",
        },
        text:{
            ...common_styles.text,
            color:"white"
        }
    }),
    secondary:StyleSheet.create({
        ...common_styles,
        container:{
            ...common_styles.container,
            backgroundColor:"white",
        },
        text:{
            ...common_styles.text,
            color:"#ff9800"
        }
    })

}