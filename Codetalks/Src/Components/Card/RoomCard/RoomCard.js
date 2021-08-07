import React from "react"
import {View,Text,TouchableWithoutFeedback} from "react-native"
import styles from "./RoomCard.style"


const RoomCard=({name,onPress})=>{
  return(
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.room_name}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>

  )
}

export default RoomCard;