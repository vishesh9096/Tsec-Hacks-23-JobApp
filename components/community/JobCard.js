import { View, Text,Image } from 'react-native'
import React from 'react'

const JobCard = (props) => {
  return (
    <View className='flex-row gap-3 pl-7 bg-blue-100 m-3 py-3 rounded-xl'>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/731/731985.png'}} className='w-20 h-20'/>
      <View className='gap-3'>
      <Text className='font-bold text-xl'>{props.jobTitle} | {props.name}</Text>
      <Text>📍{props.location}  💲{props.pay}</Text>
      <Text className='w-64 text'>{props.jobdesc}</Text>

      </View>
    </View>
  )
}

export default JobCard