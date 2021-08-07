import React from "react"
import {View,Text, TextInput} from "react-native"
import styles from "./Input.style"

const Input=({placeholder,onChangeText,value,isSecure})=>{
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.Input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={"white"}
        secureTextEntry={isSecure}
      />
    </View>
  )
}

export default Input;