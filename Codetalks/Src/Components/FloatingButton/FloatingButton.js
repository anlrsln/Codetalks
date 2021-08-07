import React from "react"
import {TouchableOpacity} from "react-native"
import styles from "./FloatingButton.style"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const FloatingButton=({onPress})=>{
  return(
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <Icon style={styles.icon} name="plus" color="white" size={30}/>
    </TouchableOpacity>
  )
}

export default FloatingButton;