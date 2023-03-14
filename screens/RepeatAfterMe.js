import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Speech from 'expo-speech';

const RepeatAfterMe = () => {
  const speak1 = () => {
    const speechOptions ={rate:0.8,language:"en-GB"}
    const thingToSay = 'My name is Raj Verma';
    Speech.speak(thingToSay,speechOptions);
  };
  const speak2 = () => {
    const speechOptions ={rate:0.8,language:"en-GB"}
    const thingToSay = 'I am 10 years old';
    Speech.speak(thingToSay,speechOptions);
  };
  const speak3 = () => {
    const speechOptions ={rate:0.8,language:"en-GB"}
    const thingToSay = 'I live in mumbai';
    Speech.speak(thingToSay,speechOptions);
  };
    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
      
  }))
  return (
    <>
    <Text className="text-3xl font-bold px-4 pt-20">Repeat after me</Text>
    <TouchableOpacity
    onPress={()=>{speak1()}}
    className='flex-row gap-5 pt-10 pl-5'>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/727/727269.png'}} className='w-16 h-16'/>
      <Text className='text-2xl pt-3'>My name is Raj Verma.</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{speak2()}} className='flex-row gap-5 pt-5 pl-5'>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/727/727269.png'}} className='w-16 h-16'/>
      <Text className='text-2xl pt-3'>I am 10 years old.</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{speak3()}} className='flex-row gap-5 pt-5 pl-5'>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/727/727269.png'}} className='w-16 h-16'/>
      <Text className='text-2xl pt-3'>I live in Mumbai.</Text>
    </TouchableOpacity>
    
    </>
  )
}

export default RepeatAfterMe