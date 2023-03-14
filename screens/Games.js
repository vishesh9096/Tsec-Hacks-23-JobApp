import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'

const Games = (ur) => {
    const navigation= useNavigation();
    useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  )


  return (

    <View className="bg-[#cfe7fc] flex-1">
     
        <View className=" pt-20">
        <Text className="text-center text-xl text-black font-bold">
        Games
        </Text>
            <View className="flex-row items-center gap-x-8  pt-48 pl-5">
                <TouchableOpacity 
                onPress={()=>{navigation.navigate("mtf")}}
                className="w-44 h-60  bg-[#0A2647] rounded-2xl">
                    <View className="pl-8 pt-14 ">
                    <Image className="h-24 w-24"
                    source={require("../assets/suitcase.png")}
                     />
                     </View>
                    <Text className="pl-2 pt-7 text-white text-xl font-bold">
                        Match the faces
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={()=>{navigation.navigate("ram")}}
                className="w-44 h-60 bg-[#0A2647] rounded-2xl">
                    <View className="pl-10 pt-16 ">
                        <Image className="h-24 w-24"
                    source={require("../assets/user.png")} />
                    </View>
                
                    <Text className="pl-2 pt-5 text-white  text-xl font-bold">
                        Repeat after me
                    </Text>
                    
                </TouchableOpacity>


            </View>
        </View>
      
    </View>
  )
}

export default Games;