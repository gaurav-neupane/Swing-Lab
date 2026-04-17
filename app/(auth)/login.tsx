import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingX, spacingY } from "@/constants/theme";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import Input from "@/components/Input";
import { verticalScale } from "@/utils/styling";
import { AtIcon, LockIcon } from "phosphor-react-native";
import Button from "@/components/Button";

const login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
            <Typo size={30}>Hey,</Typo>    
            <Typo size={30}>Welcome Back</Typo>    
        </View>
        <View style={styles.form}>
            <Typo size={16} color={colors.primary400}>Login to track all your analytics</Typo>
                <Input
                    placeholder="Enter your email"
                    onChangeText={(value)=>emailRef.current = value}  
                    icon={
                        <AtIcon size={verticalScale(26)} color={colors.primary300} />
                    }
                />      
                <Input
                    placeholder="Enter your password"
                    secureTextEntry
                    onChangeText={(value) => passwordRef.current = value}  
                    icon={
                        <LockIcon size={verticalScale(26)} color={colors.primary300} />
                    }
                  />
                  <Typo size={14} style={{ alignSelf: 'flex-end' }}>Forgot Password?</Typo> 
                  <Button>
                      <Typo fontWeight={'600'} color={colors.primary} >Log In</Typo>
                  </Button>  
              </View>
              <View style={styles.footer}>
                  <Typo size={15} color={colors.primary400}>Don't have an account?</Typo>
                  <Pressable>
                      <Typo size={15} fontWeight={'600'} color={colors.secondary} >Sign up</Typo>
                  </Pressable>
              </View>  
      </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
    },
    form: {
        gap: spacingY._20
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    footerText: {
        textAlign: 'center',
    }
});
