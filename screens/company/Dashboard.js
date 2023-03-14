import { View, Text,Image, TouchableOpacity, ScrollView  } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { BellAlertIcon, CakeIcon, CalendarIcon, HomeIcon, PlayIcon, PlusIcon, SparklesIcon as SparklesIconMini, UserIcon } from "react-native-heroicons/mini";

const Dashboard = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView className="px-2">
      <ScrollView>
      <View className='flex-row pt-3 items-center mx-3 space-x-2'>
        <Image 
        source={{uri:"https://cdn-icons-png.flaticon.com/512/3347/3347375.png"}}
        className="h-14 w-14 bg-white-300 p-4 rounded-full"
        />
        <View className=''>
            <Text className='font-bold text-gray-500 text-sm'>Welcome back</Text>
            <Text className='font-bold text-2xl'>Udaan</Text>
        </View>
        <View className="pl-44">
        <BellAlertIcon color={"#0A2647"} size={40}/>
        </View>

      </View> 
      <View className="px-4 pt-6  ">
      <TouchableOpacity
      onPress={()=>{navigation.navigate("Your")}}
      className="h-24 w-full flex-row items-center bg-[#BFEAF5] rounded-2xl ">
        <View className="">
        <Text className="text-3xl pl-4  font-bold">
          Post a new Job
        </Text>
        <Text className="pl-4 pt-1">Last posted 26th Jan 2023</Text>
        </View>
        <View className="pl-24">
        <PlusIcon size={40} color={"#0A2647"}/>
        </View>

      </TouchableOpacity>

      <View className="flex-row items-center pt-6">
      <Text className=" text-3xl font-bold"> Stastics</Text>
      <TouchableOpacity>
      <Text className="text-lg pl-44 pt-2 underline">View all</Text>
      </TouchableOpacity>
      </View>


      <View className="pt-6 ">
          <View className="flex-row items-center gap-x-4">
            <View className="gap-y-4">
                <TouchableOpacity className="h-40 w-56 bg-white rounded-2xl">
                  <Text className="text-5xl font-bold text-[#0A2647] pt-5 px-2 ">546 </Text>
                  <Text className="text-lg  font-bold text-[#0A2647] pl-5 ">views </Text>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/9485/9485657.png"}}  className="w-36   h-36 absolute top-5 right-4 rounded-3xl" />
                </TouchableOpacity>

                <TouchableOpacity className="h-20  w-56 bg-white rounded-2xl ">
                <Text className="text-4xl font-bold text-[#0A2647] pt-2 pl-2 ">84 </Text>
                <Text className="  font-bold text-gray-500 pl-2  ">Interactions </Text>

                </TouchableOpacity>

            </View>
            <TouchableOpacity>
              <View className="h-64 w-36 bg-white gap-y-3 rounded-2xl">
                <View className="pt-4 pl-3 flex-row items-center">
                    <View className="bg-[#0077B6] h-8 rounded-md w-10"></View>
                    <View className="pl-1">
                      <Text className="font-bold text-lg">Studio</Text>
                      <Text className="text-gray-500 font-bold pl-1">242</Text>
                    </View>
                </View>
                  <View className='px-4 pt-1'>
                  <View className="h-1 w-28 pl- bg-gray-300"></View>
                  </View>
                <View className="pt-2 pl-3 flex-row items-center">
                    <View className="bg-[#00B4D8] h-8 rounded-md w-10"></View>
                    <View className="pl-1">
                      <Text className="font-bold text-lg">Company</Text>
                      <Text className="text-gray-500 font-bold pl-1">231</Text>
                    </View>
                </View>
                <View className='px-4 pt-1'>
                  <View className="h-1 w-28 pl- bg-gray-300"></View>
                  </View>

                <View className="pt-2 pl-3 flex-row items-center">
                    <View className="bg-[#90E0EF] h-8 rounded-md w-10"></View>
                    <View className="pl-1">
                      <Text className="font-bold text-xl">Others</Text>
                      <Text className="text-gray-500 font-bold pl-1">73</Text>
                    </View>
                </View>
              </View>
            </TouchableOpacity>

          </View>

      </View>

      </View>
      <View className="h-80"></View>

      </ScrollView>

      <View className="absolute bottom-0 left-2 space-x-10  bg-white w-full pt-2 pl-12  flex-row  h-20">
    
    <TouchableOpacity className="flex items-center" >
      <HomeIcon size={36} color={"#0A2647"}/>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={()=>{navigation.navigate("AllJ")}}
    className="flex items-center" >
      <CalendarIcon size={36} color={"#0A2647"}/>
      <Text>All Jobs</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>{navigation.navigate("Your")}}
    className="flex items-center" >
      <PlusIcon size={36} color={"#0A2647"}/>
      <Text>Create a Job</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>{navigation.navigate("Profile")}}
    className="flex items-center">
      <UserIcon size={36} color={"#0A2647"}/>
      <Text>Profile</Text>
    </TouchableOpacity>
    
</View>
    </SafeAreaView>
    
  )
}

export default Dashboard