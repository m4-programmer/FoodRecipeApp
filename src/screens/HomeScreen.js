import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { BellIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Categories from '../components/categories';

const HomeScreen = () => {

  const [activeCateogry, setActiveCategory] = useState('Beef')

  return (
    <View className="flex-1 bg-white">
    <StatusBar style="dark" />
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom: 50}}
    className='space-y-6 pt-14'
    alwaysBounceVertical={false}
    >
      {/* Avatar and bell icon */}
      <View className='mx-4 flex-row justify-between items-center mb-2'>
        <Image 
        source={require('../../assets/images/avatar.png')}
        style={{height: hp(5), width: hp(5)}}
        />

        <BellIcon size={hp(4)} color={'grey'} />
      </View>

      {/* greetings and punchline */}
      <View className='mx-4 space-y-2 mb-2'>
        <Text style={{fontSize: hp(1.7)}} className='text-neutral-600'>Hello, Miracle</Text>

        <View>
          <Text style={{fontSize: hp(3.8)}}  className='font-semibold text-neutral-600'>Make your own food,</Text>
        </View>

        <Text style={{fontSize: hp(3.8)}}  className='font-semibold text-neutral-600'>
          stay at <Text className='text-amber-400'>home</Text>
        </Text>
      </View>

      {/* search bar */}
      <View className='mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]'>
        <TextInput
        placeholder='Search any recipe'
        placeholderTextColor={'gray'}
        style={{fontSize: hp(1.7)}}
        className='flex-1 text-base mb-1 pl-3 tracking-wider'
        />
        <View className='bg-white rounded-full p-3'>
          <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={'grey'} />
        </View>

      </View>

      {/* categories */}
      <View>
        <Categories activeCateogry={activeCateogry} setActiveCategory={setActiveCategory}/>
      </View>

    </ScrollView>
    
  </View>
  )
}

export default HomeScreen