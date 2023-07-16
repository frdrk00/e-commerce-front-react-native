import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Entypo, FontAwesome5 } from '@expo/vector-icons'

const CartScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 w-full items-start justify-start bg-[#EBEAEF] space-y-4">
      {/* Top section */}
      <View className="flex-row items-center justify-between w-full px-4 py-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={'#555'} />
        </TouchableOpacity>

        <Text className="text-xl font-semibold text-[#555]">Shopping Bag</Text>

        <View className="w-10 h-10 rounded-xl bg-white flex items-center justify-center relative">
          <FontAwesome5 name="shopping-bag" size={16} color={'black'} />
          <View className="absolute w-4 h-4 bg-black top-0 right-0 rounded-md flex items-center justify-center">
            <Text className="text--white">2</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen
