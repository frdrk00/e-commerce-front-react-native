import { SafeAreaView } from 'react-native-safe-area-context'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Entypo, FontAwesome5 } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { EmptyCart } from '../assets'

const CartScreen = () => {
  const navigation = useNavigation()

  const cartItems = useSelector((state) => state.cartItems.cart)
  // console.log('CartItems: ', cartItems)

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
            <Text className="text--white">{cartItems?.length}</Text>
          </View>
        </View>
      </View>

      {cartItems.length === 0 || !cartItems ? (
        <View className="flex-1 w-full items-center justify-center p-4 ">
          <Image
            source={EmptyCart}
            className="w-64 h-64"
            resizeMode="contain"
          />
        </View>
      ) : (
        <ScrollView className="w-full flex-1">
          <View className="flex space-y-4">
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.data._id}
              renderItem={({ item }) => (
                <CartItemCard item={item.data} qty={item.qty} />
              )}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export const CartItemCard = ({ item, qty }) => {
  // console.log('Item: ', item)
  return (
    <View className="flex-row px-6 w-full items-center my-1">
      {/* Image */}
      <View className="bg-white rounded-xl flex items-center justify-center p-2 w-16 h-16 relative">
        <Image
          source={{ uri: item?.bgImage?.asset?.url }}
          resizeMode="cover"
          className="w-full h-full opacity-30"
        />
        <View className="inset-0 absolute  flex items-center justify-center ">
          <Image
            source={{ uri: item?.mainImage?.asset?.url }}
            resizeMode="contain"
            className="w-12 h-12"
          />
        </View>
      </View>

      {/* Text section */}
      <View className="flex items-center space-y-2 ml-3">
        <View className="flex items-start justify-center">
          <Text className="text-lg font-semibold text-[#555]">
            {item.title}
          </Text>
          <Text className="text-sm font-semibold text-[#777]">
            {item.shortDescription}
          </Text>
          {/* <View className="flex-row items-center justify-center space-x-1">
            <Text>$ {item.price * qty}</Text>
            <Text>( Qty : {qty} )</Text>
          </View> */}
          <Text className="text-lg font-bold text-black">
            $ {item.price * qty}
          </Text>
        </View>
      </View>

      {/* Qty section */}
      <View className="flex-row items-center justify-center space-x-4 rounded-xl border border-gray-300 px-3 py-1 ml-auto">
        <Text className="text-lg font-bold text-black">{qty}</Text>
      </View>
    </View>
  )
}

export default CartScreen
