import { View, Text, Button,Image, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CakeIcon, SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import Svg from 'react-native-svg';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { SocialIcon } from 'react-native-elements'


const LoginScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )

    const [text, setText] = useState('')
  return (
    
    <ScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        
        <Image source={{uri:"https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/5ba1a-top-companies-in-india.jpg?fit=1000%2C665&ssl=1"}} className="h-96 rounded-b-full w-full"/>
        <Text className="text-center text-3xl pt-8 font-bold px-5">Company Panel</Text>
        <Text className="pt-4 text-center font-bold text-gray-500 text-xl">Login </Text>
        <View className="flex gap-y-3 pt-5 text-black items-center">
        <TextInput 
        
        placeholder='Enter email id' className="text-2xl pb-3 pl-2 border-solid border-2 border-[#0A2647] w-80 h-12 rounded-xl"  maxLength={10}/>
        <TextInput 
        
        placeholder='Enter Password ' className="text-2xl pl-2 border-solid border-2 border-[#0A2647] w-80 h-12 rounded-xl"  maxLength={10}/>
        <TouchableOpacity className="pt-5 w-72" onPress={()=>{navigation.navigate("Dash")}} >
            <View className="bg-[#0A2647] rounded-xl h-11">
            <Text className=" text-center  text-white font-semibold  pt-2 text-lg h-8">Continue</Text>
            </View>
        </TouchableOpacity>
        <Text className="text-xl font-semibold pt-3 text-gray-500">or</Text>
        </View>
        <View className="items-center pt-3">
        <View className="flex-row space-x-8">
        <TouchableOpacity onPress={()=>{
          alert("Logged In ");
          navigation.navigate("Dash")}} >
        <SocialIcon
  type='twitter'
/>
        </TouchableOpacity >
        <TouchableOpacity onPress={()=>{
          alert("Logged In");
          navigation.navigate("Dash")}}>
        <SocialIcon
  type='facebook'
/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          alert("Logged In");
          navigation.navigate("Dash")}}>
        <SocialIcon
  type='google'
/>
        </TouchableOpacity>
        </View>
        
        <Text className="pt-6 text-xs">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs">Terms of Service || Privacy Policy || Content Policy</Text>

        
        </View> 
        
        
    </ScrollView>
  )
}

export default LoginScreen