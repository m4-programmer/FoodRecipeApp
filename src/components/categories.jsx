import { View, Text,ScrollView,TouchableOpacity,  } from 'react-native'
import React from 'react'
// import { categoryData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import ImageCacher from '../helpers/ImageCacher';

const Categories = ({activeCateogry, handleChangeCategory,categoryData}) => {
    
  return (
    <Animated.View entering={FadeInDown.duration(700).springify()} >
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='space-x-4'
        contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                categoryData.map((item)=> {
                    let isActive = item.strCategory == activeCateogry;
                    let activeButtonClass = isActive ? 'bg-amber-400' : 'bg-black/10';
                    return (
                        <TouchableOpacity key={item.idCategory} 
                        className='flex items-center space-y-1'
                        onPress={()=>handleChangeCategory(item.strCategory)}
                        >
                            <View className={'rounded-full p-[6px] '+ activeButtonClass}>
                                <ImageCacher
                                    uri={ item.strCategoryThumb}
                                    style={{width: hp(6), height: hp(6)}}
                                    className='rounded-full'
                                />
                            </View>
                            <Text className={'text-neutral-600 '+ (isActive && 'font-semibold')} style={{fontSize:hp(1.6)}}>
                                {item.strCategory}
                            </Text>

                        </TouchableOpacity>
                    )
                })
            }

        </ScrollView>

    </Animated.View>
  )
}

export default Categories