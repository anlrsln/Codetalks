import React, { useEffect, useState } from "react"
import {View,Text} from "react-native"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from "react-native-flash-message";
import auth from "@react-native-firebase/auth"

import Login from "./Pages/Auth/Login"
import Sign from "./Pages/Auth/Sign"
import Rooms from "./Pages/Rooms"
import Messages from "./Pages/Messages"
import Colors from "./Styles/Colors/Colors"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const Stack=createStackNavigator()


const Router=()=>{
  const [userSession,setUserSession]=useState()

  useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
      setUserSession(!!user)
    })
  },[])

  const AuthStack=()=>{
    return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign}/>
      </Stack.Navigator>
    )
  }



  function handleLogOut(){
    auth().signOut()
  }

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleAlign:"center",
        headerTintColor:Colors.mainOrange,
      }}>
        {
          !userSession ? (
            <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown:false}}/>
          ):(
            <>
              <Stack.Screen name="Rooms" component={Rooms}/>
              <Stack.Screen name={"Messages"} component={Messages} options={{
                headerRight:() => 
                <Icon 
                  name="logout" 
                  color={Colors.mainOrange}
                  size={30} 
                  style={{marginRight:10}}
                  onPress={handleLogOut}
                />
              }}/>
            </>
          )
        }
      </Stack.Navigator>
      <FlashMessage position="top"/>
    </NavigationContainer>
  )
}

export default Router;