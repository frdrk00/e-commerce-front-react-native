import { View, Text, ActivityIndicator } from 'react-native'
import { FeedDetails } from '../components'

const Feeds = ({ feeds }) => {
  return (
    <View className="flex-row flex-wrap items-center justify-center">
      {feeds?.length > 0 ? (
        <>
          {feeds?.map((item, i) => (
            <FeedDetails key={i} data={item} />
          ))}
        </>
      ) : (
        <View className="w-full h-64 flex items-center justify-center">
          <ActivityIndicator size={'large'} color={'teal'} />
          <Text>No Data</Text>
        </View>
      )}
    </View>
  )
}

export default Feeds
