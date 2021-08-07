import React,{useEffect, useState} from "react"
import {View,Text, FlatList} from "react-native"
import FloatingButton from "../../Components/FloatingButton"
import ContentInput from "../../Components/Modal/ContentInput"
import styles from "./Rooms.style"
import database from "@react-native-firebase/database"
import RoomCard from "../../Components/Card/RoomCard"
import parseRoomData from "../../Utills/parseRoomData"



const Rooms=({navigation})=>{
  const [inputModalVisible,setInputModalVisible]=useState(false)
  const [roomList,setRoomList]=useState([])


  useEffect(()=>{
    database()
    .ref("rooms/")
    .on("value",snapshot=>{
      const roomData=snapshot.val()
      const parsedData=parseRoomData(roomData || {})
      setRoomList(parsedData)
    })
  },[])

  function toggleModal(){
    setInputModalVisible(!inputModalVisible)
  }

  function addRoom(room){
    handleRoom(room)
  }

  function handleRoom(room){
    const roomObject={
      roomName:room,
    }
    database().ref("rooms/").push(roomObject)
  }

  function roomsOnClick(id){
    navigation.navigate("Messages",(id))
  }


  function renderRooms({item}){
    return <RoomCard name={item.roomName} onPress={()=>roomsOnClick(item.id)}/>
  }

  

  return(
    <View style={styles.container}>
      <FlatList style={styles.list} data={roomList} renderItem={renderRooms} numColumns={2}/>
      <FloatingButton onPress={toggleModal}/>
      <ContentInput visible={inputModalVisible} onClose={toggleModal} onAdd={addRoom} placeholder="Enter a room name"/>
    </View>
  )
}

export default Rooms;