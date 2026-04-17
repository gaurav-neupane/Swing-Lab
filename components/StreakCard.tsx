import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, radius, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import {PieChart} from 'react-native-gifted-charts'


const StreakCard = () => {
  const data = [{ value: 70, color: colors.secondary }, { value: 30 , color: colors.primary100}];
  return (
    <View style={styles.container}>
      <View style = {{ borderWidth: 2, borderColor: 'white', position: 'relative', justifyContent: "center", alignItems: 'center'}}></View>
      <View style = {{ borderWidth: 2, borderColor: 'white', position: 'relative', justifyContent: "center", alignItems: 'center'}}>
        <PieChart pieInnerComponentHeight={2} donut radius={60} innerRadius={50} innerCircleColor={colors.primary100} data={data} />
      </View>
    </View>
  );
};

export default StreakCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: spacingX._20,
    backgroundColor: colors.primary100,
    width: "100%",
    gap: 10,
    height: verticalScale(260),
    borderRadius: radius._15,
  },
});
