import React from "react"
import {View,Text} from "react-native"
import styles from "./MessageCard.style"
import { formatDistance,parseISO } from 'date-fns'
import { enUS } from 'date-fns/locale'

const MessageCard=({message})=>{
  const {date}=message
  const formatDate=formatDistance(parseISO(date), new Date(), { 
    addSuffix: true,
    locale:enUS
  })


  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{message.username}</Text>
        <Text style={styles.date}>{formatDate}</Text>
      </View>
      <View style={styles.text_body}>
        <Text style={styles.text}>{message.text}</Text>
      </View>
    </View>
  )
}

export default MessageCard;