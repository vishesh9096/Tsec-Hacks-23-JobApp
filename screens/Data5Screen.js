import { View, Text } from 'react-native'
import React, { useLayoutEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import {PdfCode} from "../Component/PdfCode";
import axios from 'axios'
import * as Speech from 'expo-speech';

const Data5Screen = () => {
    const speak = () => {
        const speechOptions ={rate:0.8,language:"en-GB"}
        const thingToSay = 'Your Resume has been Created You can download it from, For You section';
        Speech.speak(thingToSay,speechOptions);
      };
    const navigation = useNavigation();
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    const [Skills, setSkills] = useState('')
    const saveName = async()=>{
      try{
        await AsyncStorage.setItem('Skills',JSON.stringify(Skills))
        //const val = await AsyncStorage.getItem('Skills')
        console.log("data completed")
      }catch(error){
        console.log(error)
      }
    }
  return (
    <SafeAreaView className="p-2">

    <View>
        <Text className="text-center pt-3 text-xl font-semibold">Step 5 of 5</Text>
        <Text className="text-center pt-5 text-4xl font-bold">Enter your experiences </Text>
        <View className="pt-5">
        <TextInput
        value={Skills}
        onChangeText={(Skills)=>{setSkills(Skills)}} placeholder='Insert here' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />
        </View>
        <TouchableOpacity className="pt-8 w-full" onPress={()=>{navigation.navigate('Home');saveName();}} >
            <View className="bg-[#0A2647]  rounded-xl h-11">
            <Text className=" text-center  text-white font-semibold  pt-2 text-lg h-8">Continue</Text>
            </View>
        </TouchableOpacity>
        <View className="h-full"></View>
        
    </View>
    <TouchableOpacity 
    onPress={()=>{
        speak();
      saveName();
      navigation.navigate("Home");

    }}
    className="absolute  bottom-56 right-0 ">
        <View className="  rounded-full w-48 h-48 "></View>
    </TouchableOpacity>

    
</SafeAreaView>
  )
}

const printToFile = async () => {
    const name = await AsyncStorage.getItem('Name')
    const age = await AsyncStorage.getItem('Age')
    const mobnum = await AsyncStorage.getItem('Number')
    const skills = await AsyncStorage.getItem('Skills')
    let html = PdfCode(
      name=name,
      age=age,
      mobnum=mobnum,
      skills=skills
    );
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    try{
      const { uri } = await Print.printToFileAsync({
        html
      });
      console.log('File has been saved to:', uri);
        
    }catch(err){
        Alert.alert("Make shure You have Internet Connection or contact @+91 8530730017");
    }
  
  
  }

export default Data5Screen