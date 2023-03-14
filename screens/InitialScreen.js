import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';

const InitialScreen = () => {
    const speak = () => {
        const speechOptions ={rate:0.8,language:"en-GB"}
        const thingToSay = 'Hello!, welcome to oodan. If you are Visually Impared, click on bottom right corner of your device';
        Speech.speak(thingToSay,speechOptions);
      };

      const speak2 = () => {
        const speechOptions ={rate:0.79,language:"en-GB"}
        const thingToSay = 'Please enter your disability...., once done click on bottom right corner of your device';
        Speech.speak(thingToSay,speechOptions);
      };
    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
      
  }),speak()
  )

  
  return (
    <SafeAreaView className="bg-white h-full w-full">
        <Image 
        className="h-80 b-40"
        source={{uri:"https://img.freepik.com/free-vector/volunteers-helping-disabled-friends-outdoor-walking_74855-7933.jpg?w=2000&t=st=1675354837~exp=1675355437~hmac=0e6f13acc93be6a0543b68dfe25912de3eb07eb747264d8815c841e6450db3b6"}}/>
        <View className="flex items-center">
        <Text className="text-center text-3xl pt-8 font-bold px-5">Welcome to</Text>
        <View className="flex-row items-center">
        <Text className="pt-6 text-center font-bold text-gray-500 text-5xl pr-3 ">U D A A N</Text>
        <View><Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3347/3347375.png"}} className="h-16 w-16"/></View>
        </View>
        </View>
        
        <View className="flex items-center pt-14">
        <View className="flex-row gap-x-12 ">
        <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
            <View className="border bg-gray-50 h-36 w-36 rounded-2xl shadow-2xl pt-6  items-center">
            <Image source={require('../assets/hiring.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Hire People</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Choice")}}>
            <View className="border h-36 bg-gray-50 w-36 rounded-2xl shadow-2xl pt-6  items-center">
            <Image source={require('../assets/complain.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Seek Job</Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
        <View className="flex items-center pt-28">
        <Text className="pt-6 text-xs">By Continuing you agree to our </Text>

<Text className="pt-1 text-xs">Terms of Service || Privacy Policy || Content Policy</Text>

        </View>
        <TouchableOpacity
        onPress={()=>{speak2(); navigation.navigate("Choice")}}
        className="w-40 h-40  absolute bottom-0 right-0"></TouchableOpacity>
    </SafeAreaView>
  )
}

export default InitialScreen