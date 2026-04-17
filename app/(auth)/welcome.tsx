import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { Image } from "expo-image";
import { verticalScale } from "@/utils/styling";
import Button from "@/components/Button";
import { router } from "expo-router";

const welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={()=>router.push('/(auth)/login')} style={styles.loginButton}>
            <Typo fontWeight={"500"}>Sign In</Typo>
          </TouchableOpacity>
          <Image
            source={require("../../assets/images/Cricket-Splash.png")}
            contentFit="contain"
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.footer}>
          <View style={{ alignItems: 'center' }}>
            <Typo size={28}  fontWeight={'500'}>Always take control</Typo>
            <Typo size={28} fontWeight={'500'}>of your swings</Typo>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Typo size={16} color={colors.primary300} >Swings must be analyzed in order</Typo>
            <Typo size={16} color={colors.primary300}>to be a better player</Typo>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={()=>router.push('/(auth)/register')}>
              <Typo size={20} color={colors.primary} fontWeight={'600'}>Get Started</Typo>
            </Button>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  welcomeImage: {
    width: '100%',
    height: verticalScale(260),
    alignSelf: 'center',
    marginTop: verticalScale(100)
  },
  footer: {
    alignItems: 'center',
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
  }, 
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacingX._25
  }
});
