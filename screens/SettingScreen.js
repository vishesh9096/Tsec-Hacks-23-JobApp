import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import swiper from 'react-native-deck-swiper'
import Swiper from 'react-native-deck-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { CalendarIcon, HomeIcon, SquaresPlusIcon, UserIcon } from 'react-native-heroicons/mini';


const data =[
   
    {
        firstname:"Nirmaya",
        lastname:"Health Insurance Scheme",
        occupation:"Nirmaya",
        age:"20",
        PhotoURL:"https://petlandbeavercreek.com/wp-content/uploads/2022/04/2325560_800.jpg",
        id: 123,
        quote:"This scheme is to provide affordable Health Insurance to persons with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities."
    },
    {
        firstname:"Sahyogi",
        lastname:"Caregiver traning scheme",
        occupation:"student",
        age:"20",
        PhotoURL:"https://img.freepik.com/premium-photo/lhasa-apso-4-years-old-dog-portrait-isolated_191971-1661.jpg?w=2000",
        id: 123,
        quote:"A scheme  to set up Caregiver Cells (CGCs) for training and creating skilled workforce of caregivers to care for Person with Disabilities (PwD) and their families."
    },
    {
        firstname:"GyanPrabha",
        lastname:"Educational support",
        occupation:"student",
        age:"20",
        PhotoURL:"https://img.freepik.com/premium-photo/lhasa-apso-4-years-old-dog-portrait-isolated_191971-1661.jpg?w=2000",
        id: 123,
        quote:"A scheme to encourage people with Autism, Cerebral Palsy, Mental Retardation and Multiple Disabilities for pursuing educational/ vocational courses."
    },
];


const SettingScreen = () => {
    const navigation= useNavigation();
    useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
  })
  )
  return (
    <SafeAreaView >
        <Text className="text-3xl text-center font-bold pt-4">Government Schemes</Text>
        <View className="pt-8"  >
            
      <Swiper 
      stackSize={5}
      cardIndex={0}
      animateCardOpacity
      verticalSwipe={false}
      containerStyle={{ backgroundColor: "transparent" }}
      cards={data}
      renderCard={(card) => (
        <View key={card.id} className=" bg-[#0A2647]  relative  h-3/4  rounded-xl">
            <Text className="text-white text-5xl pt-10 font-bold px-8 text-center">{card.firstname}</Text>
            <Text className="text-white text-xl pt-6  px-8 text-center">{card.lastname}</Text>
            <Text className="text-white text-3xl pt-10 font-semibold px-8 text-center">
                {card.quote}
             </Text>
            
        </View>  
     )} 
      />

        </View>
        
    </SafeAreaView>
  )
}

export default SettingScreen