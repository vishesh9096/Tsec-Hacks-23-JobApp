import { View, Text ,Image} from 'react-native'
import React from 'react'

const MatchTheFaces = () => {
  return (
    <View className='flex-row'>
      <View className='flex-col'>
        <Image className='w-24 h-24' 
        source={{uri:'https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg'}}/>
        <Image className='w-24 h-24'
        source={{uri:'https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg'}}/>
        <Image className='w-24 h-24' source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0myWaT-wFw8hSE4YuJofsx2RqBb3pZpBXg&usqp=CAU'}}/>

      </View>
      <View className='flex-col'>
      <Image className='w-24 h-24' source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0myWaT-wFw8hSE4YuJofsx2RqBb3pZpBXg&usqp=CAU'}}/>
      <Image className='w-24 h-24' source={{uri:'https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg'}}/>

        <Image className='w-24 h-24' 
        source={{uri:'https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg'}}/>

      </View>
    </View>
  )
}

export default MatchTheFaces