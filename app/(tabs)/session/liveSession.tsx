import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingX } from "@/constants/theme";
import { LineChart, LineChartBicolor } from "react-native-gifted-charts";
import { verticalScale } from "@/utils/styling";
import Timer from "@/components/Timer";
import ImpactIntensityChart from "@/components/Impactintensitychart";

const data = [
  { value: 15, label: "Mon" },
  { value: 30, label: "Tue" },
  { value: 10, label: "Thu" },
  { value: 40, label: "Sat" },
];

const liveSession = () => {
  return (
    <ScreenWrapper>
      < View style={styles.container}>
        <Timer />
        <ImpactIntensityChart/>
        </View>
    </ScreenWrapper>
  );
};

export default liveSession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: 'flex-start',
    paddingHorizontal: spacingX._15,
  },
});
