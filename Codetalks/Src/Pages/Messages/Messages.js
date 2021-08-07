import React, { useEffect, useState } from "react"
import {View,Text, FlatList} from "react-native"
import styles from "./Messages.style"
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import FloatingButton from "../../Components/FloatingButton"
import ContentInput from "../../Components/Modal/ContentInput"
import parseMessageData from "../../Utills/parseMessageData"
import MessageCard from "../../Components/Card/MessageCard"




const Messages=({navigation,route})=>{
  const[inputModalVisible,setInputModalVisible]=useState(false)
  const [messageList,setMessageList]=useState([])
  const [headerName,setHeaderName]=useState("")
  const id=route.params
  

  function toggleModal(){
    setInputModalVisible(!inputModalVisible)
  }

  function addMessage(message){
    sendMessage(message)
    
  }

  
  useEffect(()=>{
    handleRoomName()
    database()
    .ref(`rooms/${id}/messages/`)
    .on("value",snapshot=>{
      const messageData=snapshot.val()
      const parsedData=parseMessageData(messageData || {})
      setMessageList(parsedData)
      
    })
  },[])



  async function handleRoomName(){
    const response = await database()
    .ref(`rooms/${id}/roomName`)
    .once("value");
    navigation.setOptions({title:response.val()})
    setHeaderName(response.val())

  }


  function sendMessage(message){
    const userMail=auth().currentUser.email
    const messageObject={
      text:message,
      username:userMail.slice(0,userMail.indexOf("@")),
      date:(new Date()).toISOString(),
    }
    database()
    .ref(`rooms/${id}/messages/`)
    .push(messageObject)
  }
  

  function renderMessages({item}){
    return <MessageCard message={item}/>
  }


  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>{headerName} room created.</Text>
      </View>
      <FlatList data={messageList} renderItem={renderMessages}/>
      <FloatingButton onPress={toggleModal}/>
      <ContentInput 
        visible={inputModalVisible} 
        onClose={toggleModal} 
        onAdd={addMessage} 
        placeholder="Type"
      />
    </View>
  )
}

export default Messages;