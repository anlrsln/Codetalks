import React, { useState } from "react"
import {View,Text,Image} from "react-native"
import Input from "../../../Components/Input"
import Button from "../../../Components/Button"
import styles from "./Login.style"
import {Formik} from "formik"
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message"
import authErrorMessageParser from "../../../Utills/authErrorMessageParser"



const Login=({navigation})=>{

  const [loading,setLoading]=useState(false)

  async function handleLogin(values){
    if(values.email==="" || values.password===""){
      showMessage({
        message:"Email or password can't be empty",
        type:"warning"
      })
      return
    }
    try{
      setLoading(true)
      await auth().signInWithEmailAndPassword(
        values.email,values.password
      )
      showMessage({
        message:"Login successful",
        type:"success"
      })
      setLoading(false)
      navigation.navigate("Rooms")
    }catch(error){
      console.log(error.code);
      showMessage({
        message:authErrorMessageParser(error.code),
        type:"danger"
      })
      setLoading(false)
    }
    
  }

  function passToSignUp(){
    navigation.navigate("Sign")
  }


  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../../Assets/Logo/d2673c3273ce49f4ba7e018bae2686dc.png")}/>
      </View>
      <View style={styles.form_container}>
        <Formik
          initialValues={{email:"",password:""}}
          onSubmit={handleLogin}
        >{({handleChange,handleSubmit,values})=>(
            <>
              <Input placeholder="E-mail" onChangeText={handleChange("email")} value={values.email}/>
              <Input placeholder="Password" onChangeText={handleChange("password")} value={values.password} isSecure/>
              <Button type="Login" onPress={handleSubmit} loading={loading}/>
            </>
          )
        }</Formik>
        <Button type="Sign Up" theme={"secondary"} onPress={passToSignUp}/>
      </View>
    </View>
  )
}

export default Login;