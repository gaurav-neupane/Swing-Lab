import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Typo from '@/components/Typo'
import { UserIcon } from 'phosphor-react-native'
import StreakCard from '@/components/StreakCard'

const home = () => {
    return (
    <ScreenWrapper>
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ gap: 4 }}>
              <Typo size={16} color={colors.primary300}>Hello,</Typo>
              <Typo size={20} fontWeight={'500'} color={colors.white}>Gaurav Neupane</Typo>
            </View>
            <View style={styles.avatar}>
              <UserIcon size={verticalScale(24)}  color={colors.white}/>
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.scrollViewStyle} showsVerticalScrollIndicator={false}>
            <StreakCard/>
          </ScrollView>
        </View>
    </ScreenWrapper>  
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    marginTop: verticalScale(8),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacingY._10,
  },
  avatar:{
    backgroundColor: colors.primary200,
    padding: spacingX._10,
    borderRadius: 50
  },
  scrollViewStyle: {
    marginTop: spacingY._10,
    paddingBottom: verticalScale(100),
    gap: spacingY._25
  }
})