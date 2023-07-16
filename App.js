import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import { HomeScreen, OnBoardingScreen, ProductScreen } from './screens'
import { BottomTab } from './components'

import store from './context/store'

import 'react-native-url-polyfill/auto'
import { useEffect, useState } from 'react'

const Stack = createNativeStackNavigator()

const MyComponent = ({ setActiveScreen }) => {
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentScreen = navigation.getCurrentRoute().name
      setActiveScreen(currentScreen)
      // console.log('Active Screen: ', currentScreen)
    })

    return unsubscribe
  }, [navigation])
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState('')

  return (
    <NavigationContainer>
      <MyComponent setActiveScreen={setActiveScreen} />
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
      </Provider>

      {activeScreen !== 'OnBoarding' && (
        <BottomTab activeScreen={activeScreen} />
      )}
    </NavigationContainer>
  )
}
