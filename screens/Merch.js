import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Merch = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView>
        <Text className="font-bold text-gray-700 text-center text-xl my-5 mb-10">Special Merch for you</Text>
    <ScrollView>

        <View className="px-3 pt-3">
            <Text className="text-xl font-bold ">Wearables</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-3 ">

            <TouchableOpacity 

            className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://image.spreadshirtmedia.com/image-server/v1/products/T405A370PA4081PT17X45Y0D1022246807W19450H23340/views/1,width=378,height=378,appearanceId=370,backgroundColor=F2F2F2,modelId=2990,crop=list/disabled.jpg"}}/>
                <Text className="text-xl pl-1 pt-3 font-semibold">₹999</Text>

                </View>
            </TouchableOpacity>




            <TouchableOpacity

            className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://ih1.redbubble.net/image.596360400.9859/ssrco,classic_tee,mens,353d77:4d8b4ffd91,front_alt,square_product,600x600.u1.jpg"}}/>
                <Text className="text-xl pl-1 pt-3 font-semibold">₹499</Text>

                </View>
            </TouchableOpacity>


            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://i.etsystatic.com/6333088/r/il/9214f9/2285522603/il_fullxfull.2285522603_e3tp.jpg"}}/>
                <Text className="text-xl pl-1 pt-3 font-semibold">₹399</Text>

                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>



        <View className="px-3 pt-3 mt-12">
            <Text className="text-xl font-bold ">Equipments</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-3 ">

            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://rukminim1.flixcart.com/image/416/416/ktx9si80/hearing-aid/e/t/v/new-portable-mini-hearing-aid-device-adjustable-sound-control-original-imag75zyhmeuukwk.jpeg?q=70"}}/>
                <Text className="text-lg pl-1 font-semibold">Hearing Device</Text>
                <Text className="text-md pl-1 pt-2">₹1099</Text>
                </View>
            </TouchableOpacity>




            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOL1AppTtcldkb3zV24GpKvRlde-cNkaBgQ&usqp=CAU"}}/>
                <Text className="text-lg pl-1 font-semibold">Walking Cane</Text>
                <Text className="text-md pl-1 pt-2">₹699</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity className="bg-white h-52 w-40 rounded-2xl">
                <View>
                    <Image className="w-40 h-36 rounded-t-2xl"
                     source={{uri:"https://images.unsplash.com/photo-1619618691037-751d1e6c9ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2hlZWxjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}}/>
                <Text className="text-lg pl-1 font-semibold">Wheel Chair</Text>
                <Text className="text-md pl-1 pt-2">₹900</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
        </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default Merch