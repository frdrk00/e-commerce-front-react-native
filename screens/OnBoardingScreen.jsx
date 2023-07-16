import { View, Text } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const OnBoardingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-green-300">
      <Swiper>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  )
}

export const ScreenOne = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text>Screen One</Text>
    </View>
  )
}

export const ScreenTwo = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-300">
      <Text>Screen Two</Text>
    </View>
  )
}

export const ScreenThree = () => {
  return (
    <View className="flex-1 items-center justify-center bg-orange-300">
      <Text>Screen Three</Text>
    </View>
  )
}

export default OnBoardingScreen
