import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors } from '@/constants/theme'

const analytics = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Typo color={colors.primary300} >Create a session to view analytics</Typo>
      </View>
    </ScreenWrapper>
  )
}

export default analytics

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})