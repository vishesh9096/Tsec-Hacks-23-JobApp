import { View, Text, Image, TextInput } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import React,{useEffect, useLayoutEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { TouchableOpacity } from 'react-native'
import JobCard from '../../components/community/JobCard';
import { CalendarIcon, HomeIcon, PlusIcon, UserIcon } from 'react-native-heroicons/mini';

const AllJobs = () => {
  const [jobs,setJobs] = useState()
  let headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

}
    async function fetchData(){
        axios
        .get("http://192.168.0.107:5500/alljobs",headers)

        //.get("http://192.168.0.155:5500/alljobs",headers)

        .then(function (response) {
            setJobs(response.data.jobs);
            console.log(jobs)
        })
        .catch(error => console.log(error));
    } 

    useEffect(() => {
        fetchData()
    }, [])

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView>
    <View className='items-start'>
      <View className="pl-5">
      <TextInput placeholder='Search Jobs' className='pb-5 bg-gray-300 w-96 rounded-full text-center	pt-5' ></TextInput>
      </View>
        
      {

        jobs && jobs.map(data=>{
          return(
            <>
          <JobCard
          image={data.image}
          name={data.companyName}
          jobTitle={data.jobTitle}
          jobdesc={data.jobDescription}
          location={data.location}
          pay={data.pay}
          />   
          </>)
          
        })
      }
      </View>
      <View className="h-full"></View>
      <View className="absolute bottom-64 left-2 space-x-10  bg-white w-full pt-2 pl-12  flex-row  h-20">
    
    <TouchableOpacity className="flex items-center"
     onPress={()=>{navigation.navigate("Dash")}}
     >
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
    <TouchableOpacity className="flex items-center">
      <UserIcon size={36} color={"#0A2647"}/>
      <Text>Profile</Text>
    </TouchableOpacity>
    
</View>
    </SafeAreaView>
  )
}

export default AllJobs