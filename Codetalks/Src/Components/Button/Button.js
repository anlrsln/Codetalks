import React from "react"
import {View,Text,TouchableOpacity,ActivityIndicator} from "react-native"
import styles from "./Button.style"

const Button=({type,onPress,theme="primary",loading})=>{
  return(
    <TouchableOpacity 
      style={styles[theme].container}
      onPress={onPress}
    >
      <View style={styles[theme].text_container}>
        {loading ? <ActivityIndicator color="white"/>
        : <Text style={styles[theme].text}>{type}</Text>
        }
      </View>
    </TouchableOpacity>
  )
}

export default Button;