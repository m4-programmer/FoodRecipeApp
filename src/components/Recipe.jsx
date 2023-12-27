import { View, Text, Pressable, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
// import { mealData } from '../constants';
import Animated, { FadeInDown } from 'react-native-reanimated';
import ImageCacher from '../helpers/ImageCacher';
import { useNavigation } from '@react-navigation/native';

const Recipe = ({categoryData, mealData}) => {
    const navigation = useNavigation();
  return (
    <View className='mx-4 space-y-3 '>
      <Text 
        className='font-semibold text-neutral-600'
        style={{fontSize: hp(3)}}
        >
            Recipes
        </Text>

        <View>
        {categoryData.length == 0 || mealData.length==0 ?
            <ActivityIndicator size={'large'} color={'grey'} className='mt-4'/>
        : <MasonryList
            data={mealData}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item,i}) => <RecipeCard item={item} index={i} navigation={navigation}/>}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({first: ITEM_CNT})}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
        />}
        </View>
    </View>
  )
}
const RecipeCard = ({item, index,navigation}) => {
    const isEven = index%2==0;
    return (
        <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
            <Pressable
                style={{width: '100%', paddingLeft: isEven ? 0:8, paddingRight: isEven ? 8: 0}}
                className='flex justify-center mb-4 space-y-1'
                onPress={()=>{navigation.navigate('RecipeDetail', {...item})}}
            >
                <ImageCacher
                    uri={item.strMealThumb}
                    style={{width: '100%', height: index%3== 0 ? hp(25) : hp(35), borderRadius: 35}}
                    className='bg-black/5'
                />
                <Text style={{fontSize: hp(1.5)}} className='font-semibold ml-2 text-neutral-600'>
                    {
                        item.strMeal.length > 20 ? item.strMeal.slice(0,20)+'...': item.strMeal
                    }
                </Text>
                
            </Pressable>
        </Animated.View>
    )
}

export default Recipe