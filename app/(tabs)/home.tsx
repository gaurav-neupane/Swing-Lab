import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import Typo from "@/components/Typo";
import {
  BluetoothIcon,
  BluetoothSlashIcon,
  CaretRightIcon,
  CricketIcon,
  UserIcon,
} from "phosphor-react-native";
import StreakCard from "@/components/StreakCard";
import { sessionType } from "@/types";
import Button from "@/components/Button";
import { router } from "expo-router";



const home = () => {

    const accountOptions: sessionType[] = [
    {
      title: "Cover Drive",
      timestamp: 'Sept 18, 18:30',
    },
    {
      title: "Lofted Shot",
      timestamp: 'Sept 17, 16:30',
    },
    {
      title: "Straight Drive",
      timestamp: 'Sept 15, 20:00',
    },
  ]

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ gap: 4 }}>
            <Typo size={16} color={colors.primary300}>
              Hello,
            </Typo>
            <Typo size={20} fontWeight={"500"} color={colors.white}>
              Gaurav Neupane
            </Typo>
          </View>
          <View style={styles.avatar}>
            <UserIcon size={verticalScale(24)} color={colors.white} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: spacingY._12,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <BluetoothSlashIcon size={verticalScale(24)} color="red" />
            <Typo size={14} color={colors.primary300}>
              Not Connected
            </Typo>
          </View>
          <TouchableOpacity onPress={()=>router.push("/(modals)/connectModal") }>
            <Typo size={14} color="lightblue">
            Tap to Connect
            </Typo>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
        >
          <StreakCard />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typo size={16}>Recent Sessions</Typo>
            <Typo size={14} color={colors.primary300}>
              See all
            </Typo>
          </View>
          <View>
            {accountOptions.map((item, index) => {
              return (
                <View key={index} style={styles.listItem}>
                  <TouchableOpacity style={styles.flexRow}>
                    <View
                      style={[
                        styles.listIcon,
                        { backgroundColor: colors.primary200 },
                      ]}
                    >
                    <CricketIcon size={24} color={colors.primary300} />
                    </View>
                    <View style={{ flex: 1 , gap: 2 ,  justifyContent: 'center'}}>
                      <Typo size={16} fontWeight={"500"}>
                       {item.title}
                      </Typo>
                      <Typo size={10} color={colors.primary300} fontWeight={"500"}>
                       {item.timestamp}
                      </Typo>
                    </View >
                    <CaretRightIcon
                      size={verticalScale(20)}
                      weight="bold"
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <Button onPress={()=> router.push('/(tabs)/session/liveSession')}>
            <Typo size={16} fontWeight={'600'} color={colors.primary}>Start Session</Typo>
          </Button>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacingX._20,
    marginTop: verticalScale(8),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacingY._10,
  },
  avatar: {
    backgroundColor: colors.primary200,
    padding: spacingX._10,
    borderRadius: 50,
  },
  scrollViewStyle: {
    marginTop: spacingY._10,
    paddingBottom: verticalScale(25),
    gap: spacingY._20,
  },
  listItem: {
    marginBottom: verticalScale(8),
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingY._10,
  },
  listIcon: {
    height: verticalScale(44),
    width: verticalScale(44),
    backgroundColor: colors.primary300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius._15,
    borderCurve: "continuous",
  },
});
