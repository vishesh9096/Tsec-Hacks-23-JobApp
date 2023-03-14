
import * as Speech from 'expo-speech';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalendarIcon, HomeIcon, MagnifyingGlassIcon, MapPinIcon, PlayIcon, SquaresPlusIcon, UserIcon } from 'react-native-heroicons/mini';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeJobCard from '../components/HomeJobCard'

const HomeScreen = () => {
  const speak = () => {
    const speechOptions ={rate:0.8,language:"en-GB"}
    const thingToSay = 'Welcome to Home Screen...... You can click on the center of the screen to View job details....You can also swipe left to explore more jobs';
    Speech.speak(thingToSay,speechOptions);
  };
 
  const navigation = useNavigation();

  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  }),speak()
  )

  const [jobs,setJobs] = useState()
  const [name,setName] = useState('User')
  let headers = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Methods': 'OPTIONS,POST',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'X-Requested-With': '*',
    },
  }
  
  async function fetchData(){
    const val = await AsyncStorage.getItem('Name')
    //if(val) setName(JSON.parse(val))
    axios
    .get("http://192.168.0.155:5500/alljobs",headers)
    .then(function (response) {
        setJobs(response.data.jobs);
        console.log(jobs)
    })
    .catch(error => console.log(error));
  }

  useEffect(() => {
      fetchData()
      console.log(jobs)
  }, [])

 
  

  return (
    <SafeAreaView className=" pt-4">
      <View className="px-4">
        <View >
          <View className="flex-row items-center">
          <Text className="text-xl font-semibold ">Hey, {name} 👋</Text>
          <View className="flex-row items-center pl-48 ">
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/236/236832.png'}} className="w-12 h-12 rounded-full"/>
          </View>
          </View>
          <Text className="text-3xl font-bold pt-2">Lets find your</Text>
          <Text className="text-3xl font-bold ">Dream Job!</Text>

        </View>

        <ScrollView  horizontal={true} className="pt-12 gap-x-4 h-160 w-full">
        <TouchableOpacity 
          onPress={()=>{navigation.navigate("Job")}}
          className="pl-1 h-full py-10 bg-[#0A2647] rounded-3xl ">
            <View className=" h-96  flex items-center rounded-3xl w-96 bg-[#0A2647]">
              <View className="p-2 pt-8">
              <Image className="w-28 h-28" source={{uri:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png"}}/>
              </View>
              <Text className="text-3xl pt-2 text-white font-bold">UI/UX Designer</Text>
              <View className="flex-row pt-2 items-center gap-x-1">
                <MapPinIcon color={"gray"}/> 
                <Text className="text-xl text-gray-500 font-bold">Bandra West</Text>
              </View>
              <View className="flex-row items-center pb-4 pt-6 gap-x-5">
                <Text className="text-2xl font-semibold text-white">• Part Time</Text>
                <Text className="text-2xl font-semibold text-white">• Remote</Text>
                <Text className="text-2xl font-semibold text-white">• 6 LPA</Text>
              </View>
              <View className="h-14   w-80 bg-[#0A2647] rounded-full">
                  <Text className="text-center text-white pt-3 font-bold text-2xl">Click for more details</Text>
              </View>

            </View>

          </TouchableOpacity>

          
          
          <TouchableOpacity 
          onPress={()=>{navigation.navigate("Job2")}}
          className="pl-1 h-full py-10 bg-[#0A2647] rounded-3xl ">
            <View className=" h-96  flex items-center rounded-3xl w-96 bg-[#0A2647]">
              <View className="p-2 pt-8">
              <Image className="w-28 h-28" source={{uri:"https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg"}}/>
              </View>
              <Text className="text-3xl pt-2 text-white font-bold">Sales Manager</Text>
              <View className="flex-row pt-2 items-center gap-x-1">
                <MapPinIcon color={"gray"}/> 
                <Text className="text-xl text-gray-500 font-bold">Mumbai Central</Text>
              </View>
              <View className="flex-row items-center pb-4 pt-6 gap-x-5">
                <Text className="text-2xl font-semibold text-white">• Full Time</Text>
                <Text className="text-2xl font-semibold text-white">• In Office</Text>
                <Text className="text-2xl font-semibold text-white">• 8 LPA</Text>
              </View>
              <View className="h-14   w-80 bg-[#0A2647] rounded-full">
                  <Text className="text-center text-white pt-3 font-bold text-2xl">Click for more details</Text>
              </View>

            </View>

          </TouchableOpacity>

        </ScrollView>
        </View>
        <View className="h-44"></View>

        

        <View className="absolute bottom-0 left-0 space-x-9  bg-white w-full pt-2 pl-12  flex-row  h-20">
    
    <TouchableOpacity className="flex items-center" >
      <HomeIcon size={36} color={"#0A2647"}/>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Free")}}>
      <CalendarIcon size={36} color={"#0A2647"}/>
      <Text>FreeLancing</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Commu")}}>
      <SquaresPlusIcon size={36} color={"#0A2647"}/>
      <Text>Community</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      navigation.navigate("Fy");
    }} className="flex items-center">
      <UserIcon size={36} color={"#0A2647"}/>
      <Text>For You</Text>
    </TouchableOpacity>
    
</View>
<TouchableOpacity
onPress={()=>{
  navigation.navigate("Fy");
}}
className="absolute  h-32 w-32 bottom-0 right-0"></TouchableOpacity>

    </SafeAreaView>
  )

}
export default HomeScreen