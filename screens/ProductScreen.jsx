import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

const ProductScreen = ({ route }) => {
  const { _id } = route.params
  // console.log('ID: ', _id)

  const feeds = useSelector((state) => state.feeds)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    if (feeds) {
      setData(feeds?.feeds.filter((item) => item._id === _id)[0])
      // console.log("Id Data: ", feeds?.feeds.filter(item => item._id === _id)[0])
      setInterval(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [])

  return (
    <View className="flex-1 items-start justify-start bg-[#EBEAEF] space-y-4">
      {isLoading ? (
        <View className="w-full flex-1 h-full items-center justify-center">
          <ActivityIndicator size={'large'} color={'teal'} />
        </View>
      ) : (
        <>
          <SafeAreaView className="w-full">
            {/* Top section */}
            <View className="flex-row items-center justify-between px-4 py-2 w-full">
              <TouchableOpacity>
                <Entypo name="chevron-left" size={32} color={'#fff'} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="shopping-cart" size={32} color={'#555'} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </>
      )}
    </View>
  )
}

export default ProductScreen
