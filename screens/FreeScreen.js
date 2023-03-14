import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const FreeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView>
        <Text className="font-bold text-gray-700 text-center text-xl">Freelancing Opportunities</Text>
    <ScrollView>

        <View className="px-3 pt-3">
            <Text className="text-xl font-bold ">Sell your Art</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-3 ">

            <TouchableOpacity 

            className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"}}/>
                <Text className="text-xl pl-1 pt-3 font-semibold">₹19399</Text>

                </View>
            </TouchableOpacity>




            <TouchableOpacity

            className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1611873890450-feea28d808f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}}/>
                <Text className="text-xl pl-1 pt-3 font-semibold">₹99999</Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1612224890423-f0be437b8f73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"}}/>
                <Text className="text-xl pl-1 pt-3 font-semibold">₹90999</Text>

                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>



        <View className="px-3 pt-3">
            <Text className="text-xl font-bold ">Create Music</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-3 ">

            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}}/>
                <Text className="text-lg pl-1 font-semibold">Guitar Player</Text>
                <Text className="text-md pl-1 pt-2">₹400 per hr</Text>
                </View>
            </TouchableOpacity>




            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}}/>
                <Text className="text-lg pl-1 font-semibold">Tabla Player</Text>
                <Text className="text-md pl-1 pt-2">₹300 per hr</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}}/>
                <Text className="text-lg pl-1 font-semibold">Piano Player</Text>
                <Text className="text-md pl-1 pt-2">₹600 per hr</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>




        <View className="px-3 pt-3">
            <Text className="text-xl font-bold ">Showcase Your Talent</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-3 ">

            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}}/>
                <Text className="text-lg pl-1 font-semibold">Motivational Speaker</Text>

                </View>
            </TouchableOpacity>




            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1638389746457-ac5ff8228bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"}}/>
                <Text className="text-lg pl-1 font-semibold">Voice Over </Text>
                <Text className="text-lg pl-1 font-semibold">Artist</Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1584956552999-65adccdbf18f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}}/>
                <Text className="text-lg pl-1 font-semibold">Magician</Text>

                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default FreeScreen