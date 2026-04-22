import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, spacingX, spacingY } from '@/constants/theme'
import Typo from '@/components/Typo'
import Button from '@/components/Button'
import { router } from 'expo-router'


const index = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={{gap: spacingY._20}} >
          <Typo size={20} fontWeight={'500'} color={colors.primary300}>Ready to start the session ?</Typo>
          <Button onPress={()=>router.push('/(tabs)/session/liveSession')}>
            <Typo size={18} fontWeight={'600'} color={colors.primary} >Start Session</Typo>
          </Button>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacingX._20
  },
})