import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import Header from '@/components/Header'
import { verticalScale } from '@/utils/styling'
import Typo from '@/components/Typo'
import { Image } from 'expo-image'
import {UserIcon} from 'phosphor-react-native'
import { accountOptionType } from '@/types'
import { PencilIcon, SignOutIcon , GearIcon, CaretRightIcon} from 'phosphor-react-native'

const profile = () => {

  const accountOptions: accountOptionType[] = [
    {
      title: "Edit Profile",
      icon: <PencilIcon size={26} color={colors.white} />,
      routeName: '',
      bgColor: '#6366f1'
    },
    {
      title: "Settings",
      icon: <GearIcon size={26} color={colors.white} />,
      routeName: '',
      bgColor: '#059669'
    },
    {
      title: "Logout",
      icon: <SignOutIcon size={26} color={colors.white} />,
      routeName: '',
      bgColor: '#e11d48'
    },
  ]

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title='Profile' style={{marginTop: spacingY._5}}/>
        <View style={styles.userInfo}>
          <View>
            <Image
              source={require('../../assets/images/defaultAvatar.png')}
              style={styles.avatar}
              contentFit='cover'
              transition={100}
            />
          </View>
          <View style={styles.nameContainer}>
            <Typo size={24} fontWeight={"600"} color={colors.white}>Gaurav Neupane</Typo>
            <Typo size={15} color={colors.primary300}>neupane.gaurav84@gmail.com</Typo>
          </View>
        </View>
        <View style={styles.accountOptions}>
          {accountOptions.map((item, index) => {
            return (
              <View key={index} style={styles.listItem}>
                <TouchableOpacity style={styles.flexRow}>
                  <View style={[styles.listIcon , {backgroundColor: item?.bgColor}]}>
                    {item.icon && item.icon}
                  </View>
                  <Typo size={16} fontWeight={'500'} style={{flex: 1}}>{item.title}</Typo>
                  <CaretRightIcon size={verticalScale(20)} weight='bold'color={colors.white} />
                </TouchableOpacity>
              </View>  
            )
          })}
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
  },
  userInfo: {
    marginTop: verticalScale(30),
    alignItems: 'center',
    gap: spacingY._15
  },
  nameContainer: {
    gap: verticalScale(4),
    alignItems: 'center',
  },
  avatar: {
    alignSelf: 'center',
    backgroundColor: colors.primary300,
    height: verticalScale(135),
    width: verticalScale(135),
    borderRadius: 200
  },
  listItem: {
    marginBottom: verticalScale(15)
  },
  accountOptions: {
    marginTop: spacingY._35
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingY._10
  },
  listIcon: {
    height: verticalScale(44),
    width: verticalScale(44),
    backgroundColor: colors.primary300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius._15,
    borderCurve: 'continuous'
  }
})