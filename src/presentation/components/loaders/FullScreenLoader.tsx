import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { globalStyles } from '../../theme/theme'

export const FullScreenLoader = () => {
  return (
    <View style={ globalStyles.loaderContainer }>
        <ActivityIndicator size='large' color={'indigo'} />
    </View>
  )
}
