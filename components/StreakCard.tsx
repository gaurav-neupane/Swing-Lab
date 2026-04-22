import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import {PieChart} from 'react-native-gifted-charts'
import Typo from "./Typo";


const GOAL = 500;
const FOOD = 150;
const EXERCISE = 135;
 
// Remaining = Goal - Food + Exercise
const remaining = GOAL - FOOD + EXERCISE;
 
const donutData = [
  {
    value: FOOD,
    color: colors.secondary, // orange for consumed
  },
  {
    value: remaining,
    color: colors.primary200, // dark grey for remaining
  },
];

const StreakCard = () => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <Typo size={18} style={styles.title}>Your current form</Typo>
 
      {/* Content Row */}
      <View style={styles.contentRow}>
        {/* Left: Stats */}
        <View style={styles.statsContainer}>
          {/* Goals */}
          <View style={styles.statRow}>
            <View style={styles.iconCircle}>
              <Text style={styles.goalIcon}>🎯</Text>
            </View>
            <View>
              <Text style={styles.statLabel}>Avg Accuracy</Text>
              <Text style={styles.statValue}>{GOAL.toLocaleString()}</Text>
            </View>
          </View>
 
          {/* Food */}
          <View style={styles.statRow}>
            <View style={styles.iconCircle}>
              <Text style={styles.foodIcon}>💥</Text>
            </View>
            <View>
              <Text style={styles.statLabel}>Avg Power</Text>
              <Text style={styles.statValue}>{FOOD}</Text>
            </View>
          </View>
 
          {/* Exercise */}
          <View style={styles.statRow}>
            <View style={styles.iconCircle}>
              <Text style={styles.exerciseIcon}>🏏</Text>
            </View>
            <View>
              <Text style={styles.statLabel}>Total Shots</Text>
              <Text style={styles.statValue}>{EXERCISE}</Text>
            </View>
          </View>
        </View>
 
        {/* Right: Donut Chart */}
        <View style={styles.chartContainer}>
          <PieChart
            data={donutData}
            donut
            radius={verticalScale(72)}
            innerRadius={verticalScale(60)}
            innerCircleColor={colors.primary100}
            centerLabelComponent={() => (
              <View style={styles.centerLabel}>
                <Typo size={12}>
                  4 Day
                </Typo>
                <Typo size={12}>
                  Streak 🔥
                </Typo>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default StreakCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary100,
    borderRadius: radius._15,
    padding: spacingY._15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    marginBottom: spacingY._20,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsContainer: {
    flex: 1,
    gap: verticalScale(16),
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: verticalScale(12),
  },
  iconCircle: {
    width: spacingY._35,
    height: spacingY._35,
    borderRadius: 18,
    backgroundColor: "#2C2C2E",
    alignItems: "center",
    justifyContent: "center",
  },
  goalIcon: {
    fontSize: verticalScale(16),
  },
  foodIcon: {
    fontSize: verticalScale(16),
  },
  exerciseIcon: {
    fontSize: verticalScale(16),
  },
  statLabel: {
    color: "#8E8E93",
    fontSize: verticalScale(12),
    marginBottom: spacingY._5,
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: verticalScale(20),
    fontWeight: "700",
  },
  chartContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: spacingY._12,
  },
  centerLabel: {
    alignItems: "center",
    justifyContent: "center",
  },
});
