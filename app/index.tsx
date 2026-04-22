import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import Typo from '@/components/Typo'

const index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/(tabs)/home');
    },2000)
  }, [])
  
  return (
    <View style={styles.container}>
      <Typo size={38} color={colors.secondary}>Swing Lab</Typo>
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white
  }
})