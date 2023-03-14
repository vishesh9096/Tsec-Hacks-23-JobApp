import { View,ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect,useState,useEffect} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import PostCard from '../components/community/PostCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CalendarIcon, HomeIcon, SquaresPlusIcon, UserIcon } from 'react-native-heroicons/mini'
 
const Community = () => {
    const [task,setTask] = useState("");
  const [taskItems,setTaskItems] = useState([])

  const getData = async()=>{
    let value = await AsyncStorage.getItem('tasks')
    if(value){
      setTaskItems(JSON.parse(value))
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const completeTask = (index)=>{
    let taskItemsCopy = [...taskItems]
    taskItemsCopy.splice(index,1)
    setTaskItems(taskItemsCopy)
    saveTask()
  }

  const saveTask = async()=>{
    try{
      await AsyncStorage.setItem('tasks',JSON.stringify(taskItems))
    }catch(error){
      console.log(error)
    }
  }

  const handleAddTask= async()=>{
    if(task!=""){
      //Keyboard.dismiss()
      setTaskItems([task,...taskItems])
      console.log(taskItems)
      saveTask()
      setTask("")
    }
  }
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView>
            <View className='pt-2 pb-5 justify-center items-center'>
            <View className="flex-row items-center">
        <Text className="pt-1 text-center font-bold text-gray-500 text-2xl pr-3 ">U D A A N</Text>
        <View><Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3347/3347375.png"}} className="h-10 w-10"/></View>
        </View>
            </View>
        <ScrollView className='mb-5 pl-1'>
            
            <View className='flex-row items-center gap-7 pb-5 px-5'>
                <Image 
                source={{uri:'https://cdn-icons-png.flaticon.com/512/236/236832.png'}}
                className="h-12 w-12 bg-gray-300 p-4 rounded-full"
                />
                <TextInput placeholder="What's on your mind today" className='pl-2 border-solid border-1 w-48 h-3 border-black-100 rounded-xl mb-10 justify-center' onChangeText={text=>{setTask(text)}} value={task}></TextInput>
                <View className="pl-3">
                <TouchableOpacity className='bg-blue-300 rounded-xl  w-16 h-8 items-center' onPress={()=>handleAddTask()}>
                    <Text className='pt-2'>Post</Text>
                </TouchableOpacity>
                </View>
            </View>
                <View className='w-full bg-gray-300 h-0.5'></View>
                {taskItems.map((item,index)=>{
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <PostCard
                  name="Jash Doshi"
                  username="c0mpli"
                  time='1s'
                  profileimg='https://cdn-icons-png.flaticon.com/512/236/236832.png'
                  desc={item}/>
                </TouchableOpacity>
              )
            })}
            <PostCard 
            name="Jash Doshi"
            username="c0mpli"
            time="1h"
            desc="Got a job🥳🥳"
            image='https://media.sciencephoto.com/c0/21/45/92/c0214592-800px-wm.jpg'
            profileimg='https://cdn-icons-png.flaticon.com/512/236/236832.png'
            />
            <PostCard 
            name="Kresha Mehta"
            username="kreshanatomy"
            time="5h"
            desc="Stay Strong!!💪"
            image='https://i.pinimg.com/474x/5c/2c/24/5c2c242ce0eea68c4240e41971e8022c.jpg'
            profileimg='https://cdn-icons-png.flaticon.com/512/201/201634.png'
            />
            <View className='h-24'></View>
        </ScrollView>
        <View className="absolute bottom-16 left-0 space-x-9  bg-white w-full pt-2 pl-12  flex-row  h-20">
    
    <TouchableOpacity
    onPress={()=>{navigation.navigate("Home")}}
    className="flex items-center" >
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
      
    </SafeAreaView>
  )
}

export default Community