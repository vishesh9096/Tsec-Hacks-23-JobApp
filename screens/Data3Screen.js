import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';

const Data3Screen = () => {
    const speak = () => {
        const speechOptions ={rate:0.8,language:"en-GB"}
        const thingToSay = 'Please enter your skills.....  Once done, click on bottom right corner';
        Speech.speak(thingToSay,speechOptions);
      };
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    const [Number, setNumber] = useState('')

    const saveName = async()=>{
        try{
          await AsyncStorage.setItem('Number',JSON.stringify(Number))
          const val = await AsyncStorage.getItem('Number')
          //const age = await AsyncStorage.getItem('Age')
          //const name = await AsyncStorage.getItem('Name')
          //console.log(val)
        }catch(error){
          console.log(error)
        }
      }
  return (
    <SafeAreaView className="p-2">

    <View>
        <Text className="text-center pt-3 text-xl font-semibold">Step 3 of 5</Text>
        <Text className="text-center pt-5 text-4xl font-bold">Enter your phone number</Text>
        <View className="pt-5">
        <TextInput
        value={Number}
        onChangeText={(Number)=>{setNumber(Number)}} placeholder='Insert here' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />
        </View>
        <TouchableOpacity className="pt-8 w-full" onPress={()=>{navigation.navigate('Data4');saveName();}} >
            <View className="bg-[#0A2647]  rounded-xl h-11">
            <Text className=" text-center  text-white font-semibold  pt-2 text-lg h-8">Continue</Text>
            </View>
        </TouchableOpacity>
        <View className="h-full"></View>
    </View>
    <TouchableOpacity 
    onPress={()=>{speak(); navigation.navigate("Data4"); saveName();}}
    className="absolute  bottom-60 right-0 ">
        <View className="  rounded-full w-48 h-48 "></View>
    </TouchableOpacity>

    
</SafeAreaView>
  )
}

export default Data3Screen