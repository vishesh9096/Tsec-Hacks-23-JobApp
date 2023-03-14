import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'

const FyScreen = (ur) => {
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
        For You
     </Text>
            <View className="flex-row items-center gap-x-8  pt-20 pl-7">
                <TouchableOpacity 
                onPress={()=>{navigation.navigate("set")}}
                className="w-40 h-60  bg-[#0A2647] rounded-2xl">
                    <View className="pl-8 pt-14 ">
                    <Image className="h-24 w-24"
                    source={require("../assets/suitcase.png")}
                     />
                     </View>
                    <Text className="pl-7 pt-7 text-white  text-2xl font-bold">
                        Schemes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={()=>{navigation.navigate("Profile")}}
                className="w-40 h-60 bg-[#0A2647] rounded-2xl">
                    <View className="pl-10 pt-16 ">
                        <Image className="h-24 w-24"
                    source={require("../assets/user.png")} />
                    </View>
                
                    <Text className="pl-10 pt-5 text-white  text-2xl font-bold">
                        Profile
                    </Text>
                    
                </TouchableOpacity>


            </View>

            <View className="flex-row items-center gap-x-8  pt-5 pl-7">
                <TouchableOpacity
                 onPress={()=>{navigation.navigate("Game")}}
                className="w-40 h-60 bg-[#0A2647] rounded-2xl">
                    <View className="pl-6 pt-14 ">
                        <Image 
                        className="h-28 w-28"
                        source={require("../assets/games.png")}
                         />
                    </View>
                    <Text className="pl-10 pt-3 text-white  text-2xl font-bold">
                        Games
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                 onPress={()=>{navigation.navigate("mu")}}
                className="w-40 h-60 bg-[#0A2647] rounded-2xl">
                    <View className="pl-6 pt-12">
                        <Image
                         className="h-32 w-28"
                         source={require("../assets/shirt.png")}
                        />
                    </View>

                    <Text className="pl-10 pt-2 text-white  text-2xl font-bold">
                       Merch 
                    </Text>
                </TouchableOpacity>
            </View>
            

        </View>
      
    </View>
  )
}

export default FyScreen;