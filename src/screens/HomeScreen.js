import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SparklesIcon } from "react-native-heroicons/outline";
import { StatusBar } from 'expo-status-bar';


const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500 text-white">
    <Text className="text-white">Open up App.js to start working on your app!</Text>
    <SparklesIcon />
    <StatusBar style="dark" />
    
  </SafeAreaView>
  )
}

export default HomeScreen