import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import ImageCacher from '../helpers/ImageCacher';
import { ChevronLeftIcon,  } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const RecipeDetailScreen = (props) => {
    let data = props.route.params;
    const navigation  = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false)
  return (
    <ScrollView
        className='bg-white flex-1'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp(10)}}
    >
        <StatusBar style='light' />

        {/* recipe image */}
        <View className='flex-row justify-center'>
                <ImageCacher
                    uri={data.strMealThumb}
                    style={{
                        width: wp(98), 
                        height: hp(50), 
                        borderRadius: 53, 
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                        marginTop: 4,
                        
                    }}
                    className='bg-black/5'
                />
        </View>

        {/* Back button */}
        <View className='w-full absolute flex-row justify-between items-center pt-14'>
            <TouchableOpacity className='p-2 rounded-full ml-5 bg-white' onPress={()=>navigation.navigate('Home')}>
                <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color={'#fbbf24'} />
            </TouchableOpacity>
            
            <TouchableOpacity className='p-2 rounded-full mr-5 bg-white' onPress={()=>setIsFavorite(true)}>
                <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavorite ? 'red' : 'gray'} />
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default RecipeDetailScreen 