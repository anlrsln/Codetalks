import React, { useState } from "react"
import {View,Text,TextInput} from "react-native"
import styles from "./ContentInput.style"
import Modal from "react-native-modal"

import Button from "../../Button"


const ContentInput=({visible=false,onClose,onAdd,placeholder})=>{
  const [text,setText]=useState("")


  function handleAddContent(){
    if(!text) return

    onAdd(text)
    setText(null)
  }

  return(
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={placeholder}
            style={styles.input}
            onChangeText={setText}
            value={text}
            multiline
          />
        </View>
        <Button onPress={handleAddContent} type="Add"/>
      </View>
    </Modal>
  )
}

export default ContentInput;