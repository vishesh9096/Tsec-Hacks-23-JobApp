import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const YourJobs = () => {
  const navigation = useNavigation();
  const [Location, setLocation] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [JobTitle, setJobTitle] = useState('')
  const [Desc, setDesc] = useState('')
  const [Res, setRes] = useState('')
  const [Salary, setSalary] = useState('')

  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  )
    const handleClick =async()=>{
      console.log(JobTitle,Desc,Salary,Location,Res)
      await axios.post('http://192.168.0.107:5500/addjob',{
        title:JobTitle,
        desc:Desc,
        pay:Salary,
        location:Location,
        logo:'abcd',
        name:'Udaan',
        type:'Remote',
        time:'Part time',
        respo:Res,
      })
      
    }

  return (
    <SafeAreaView>
        <Text className="text-2xl text-center font-bold">Create an Opening </Text>

        <View className="pt-6 gap-y-4 px-3">
        <TextInput
        value={Location}
        onChangeText={(Location) => {
            setLocation(Location)
          }}
        placeholder='Enter your loaction' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />

<TextInput
        value={CompanyName}
        onChangeText={(CompanyName) => {
            setCompanyName(CompanyName)
          }}
        placeholder='Enter your CompanyName' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />

<TextInput
        value={JobTitle}
        onChangeText={(JobTitle) => {
            setJobTitle(JobTitle)
          }}
        placeholder='Enter your JobTitle' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />

<TextInput
        value={Desc}
        onChangeText={(Desc) => {
            setDesc(Desc)
          }}
        placeholder='Enter your Desc' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />

<TextInput
        value={Res}
        onChangeText={(Res) => {
            setRes(Res)
          }}
        placeholder='Enter your Res' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />

<TextInput
        value={Salary}
        onChangeText={(Salary) => {
            setSalary(Salary)
          }}
        placeholder='Enter your Salary' className="text-2xl pl-2 border-solid border-2 w-full h-12 border-gray-400 rounded-xl" />
        
        <TouchableOpacity className="pt-4 w-full"  onPress={handleClick}>
            <View className="bg-[#0A2647]  rounded-xl h-11">
            <Text className=" text-center  text-white font-semibold  pt-2 text-lg h-8">Submit</Text>
            </View>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
  }

export default YourJobs