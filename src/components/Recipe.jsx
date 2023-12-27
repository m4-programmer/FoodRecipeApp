import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from '../constants';
const Recipe = () => {
  return (
    <View className='mx-4 space-y-3 '>
      <Text 
        className='font-semibold text-neutral-600'
        style={{fontSize: hp(3)}}
        >
            Recipes
        </Text>

        <View>
        <MasonryList
            data={mealData}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item,i}) => <RecipeCard item={item} index={i} />}
            // refreshing={isLoadingNext}
            // onRefresh={() => refetch({first: ITEM_CNT})}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
        />
        </View>
    </View>
  )
}
const RecipeCard = ({item, index}) => {
    const isEven = index%2==0;
    return (
        <View>
            <Pressable
                style={{width: '100%', paddingLeft: isEven ? 0:8, paddingRight: isEven ? 8: 0}}
                className='flex justify-center mb-4 space-y-1'
            >
                <Image 
                    source={{uri: item.strCategoryThumb}}
                    style={{width: '100%', height: index%3== 0 ? hp(25) : hp(35), borderRadius: 35}}
                    className='bg-black/5'
                />
                <Text style={{fontSize: hp(1.5)}} className='font-semibold ml-2 text-neutral-600'>
                    {
                        item.strCategory.length > 20 ? item.strCategory.slice(0,20)+'...': item.strCategory
                    }
                </Text>
                
            </Pressable>
        </View>
    )
}

export default Recipe