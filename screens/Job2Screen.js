
import * as Speech from 'expo-speech';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CalendarIcon, HomeIcon, MagnifyingGlassIcon, MapPinIcon, PlayIcon, SquaresPlusIcon, UserIcon } from 'react-native-heroicons/mini';
import axios from 'axios'

const Job2Screen = () => {
    const speak = () => {
        const speechOptions ={rate:0.8,language:"en-GB"}
        const thingToSay = 'The Job Title is,Sales Manager and the location is, Mumbai Central, To apply click on Bottom Center of your screen';
        Speech.speak(thingToSay,speechOptions);
      };
     
      const navigation = useNavigation();
      useLayoutEffect(()=>
      navigation.setOptions({
          headerShown: false,
      }),speak()
      )


      function sendEmail(){
        axios.post('http://192.168.0.107:5500/sendemail', {
        path:'../resume.pdf',
        subject:"New applicant to your job posting",
        description:"Congratulations, you have a new applicant. Here is his resume.",
        filename:"Resume.pdf"
      })
      .then(function (response) {
        console.log("Email is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
      }
  return (
    <SafeAreaView>
        <View className="px-6  pt-6">
      <Text className="text-xl font-semibold">Job Details</Text>

        <View className="flex pt-4 items-center shadow-xl">
            <View className="drop-shadow-2xl bg-white  rounded-2xl p-2">
        <Image className="w-32 h-32 shadow-xl  " source={{uri:"https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg"}}/>
        </View>
        <Text className="text-2xl font-bold pt-4">Sales Manager</Text>
        <View className="flex-row  items-center pb-8 pt-6 gap-x-5">
                <Text className="text-xl font-semibold text-gray-500 ">• Full Time</Text>
                <View className="flex-row  items-center gap-x-1">
                <MapPinIcon color={"gray"}/> 
                <Text className="text-xl text-gray-500 font-bold">Mumbai Central</Text>
              </View>
              </View>

              <View className="w-full h-96  rounded-3xl pt-2 bg-white">
                <Text className="text-2xl font-semibold text-center ">Description</Text>
                <Text className="px-2 pt-2 text-lg font-semibold text-gray-500">About the Job</Text>
                <Text className="px-2 text-sm pt-1 text-gray-500">The person in charge of managing a company’s sales team is known as a sales manager. They report to the head of sales or the sales director in a major corporation, but in smaller businesses, they most frequently report to the CEO or managing director</Text>
                <Text className="px-2 pt-2 text-lg font-semibold text-gray-500">Responsibilities</Text>
                <Text className="px-2 text-sm pt-1 text-gray-500">•  Acquisition of new clients</Text>
                <Text className="px-2 text-sm pt-1 text-gray-500">•  Lead conversion from numerous marketing channels</Text>
                <Text className="px-2 text-sm pt-1  text-gray-500">•  Consistently meet revenue goals in accordance with team/organizational goals</Text>
                <Text className="px-2 text-sm pt-1  text-gray-500">•  Management of customer relationships</Text>
                <Text className="px-2 text-sm pt-1  text-gray-500">•  Reporting and operations</Text>
              </View>

        </View>
        <TouchableOpacity className="pt-8 w-full" onPress={()=>{
          sendEmail()
          navigation.navigate('Ani2')}} >
            <View className="bg-[#0A2647]  rounded-xl h-11">
            <Text className=" text-center  text-white font-semibold  pt-2 text-lg h-8">Apply Now</Text>
            </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default Job2Screen