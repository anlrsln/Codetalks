import React, { useState } from "react"
import {View,Text,Image,StyleSheet} from "react-native"
import Input from "../../../Components/Input"
import Button from "../../../Components/Button"
import styles from "./Sign.style"
import {Formik} from "formik"
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message"
import authErrorMessageParser from "../../../Utills/authErrorMessageParser"
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})


const Sign=({navigation})=>{

  const [loading,setLoading]=useState(false)




  async function handleSignUp(values){
    if(values.password!==values.rePassword){
      showMessage({
        message:"Passwords are not match.",
        type:"danger"
      })
      return;
    }
    try{
      setLoading(true)
      await auth().createUserWithEmailAndPassword(
        values.email,values.password
      )
      showMessage({
        message:"User has been created.",
        type:"success"
      })
      setLoading(false)
      navigation.navigate("Login")
    }catch(error){
      showMessage({
        message:authErrorMessageParser(error.code),
        type:"danger"
      })
      setLoading(false)
    }
  }


  function goBack(){
    navigation.goBack()
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../../Assets/Logo/d2673c3273ce49f4ba7e018bae2686dc.png")}/>
      </View>
      <View style={styles.form_container}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email:"",password:"",rePassword:""}}
          onSubmit={handleSignUp}
        >{({handleChange,handleSubmit,values,errors,isValid})=>(
            <>
              <Input 
                placeholder="E-mail" 
                onChangeText={handleChange("email")} 
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && <Text style={errorStyle.text}>{errors.email}</Text>}
              <Input 
                placeholder="Password" 
                onChangeText={handleChange("password")} 
                value={values.password}
                isSecure
              />
              {errors.password && <Text style={errorStyle.text}>{errors.password}</Text>}
              <Input 
                placeholder="Password Repeat" 
                onChangeText={handleChange("rePassword")} 
                value={values.rePassword}
                isSecure
              />
              <Button type="Sign Up" onPress={handleSubmit} loading={loading} disabled={!isValid}/>
            </>
          )
        }</Formik>
        <Button type="Back" theme={"secondary"} onPress={goBack}/>
      </View>
    </View>
  )
}

const errorStyle=StyleSheet.create({
  text:{
    fontSize: 13,
    color: "#e0e0e0",
    marginLeft:10
  }
})

export default Sign;