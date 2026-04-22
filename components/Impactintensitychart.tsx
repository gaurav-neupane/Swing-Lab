import { spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const SCREEN_WIDTH = Dimensions.get("window").width;
const MAX_POINTS = 20;
const INTERVAL_MS = 800;

interface DataPoint {
  value: number;
  label?: string;
}

const getIntensityColor = (value: number): string => {
  return "#30D158";
};

const generateNextIntensity = (prev: number): number => {
  const delta = (Math.random() - 0.48) * 12;
  return Math.min(100, Math.max(0, parseFloat((prev + delta).toFixed(1))));
};

export default function ImpactIntensityChart() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>(() =>
    Array.from({ length: 8 }, () => ({
      value: parseFloat((30 + Math.random() * 20).toFixed(1)),
      label: "",
    }))
  );
  const [currentValue, setCurrentValue] = useState(35);
  const [peak, setPeak] = useState(0);
  const [avg, setAvg] = useState(0);
  const allValuesRef = useRef<number[]>([]);
  const tickRef = useRef(0);


  const color = getIntensityColor(currentValue);
  const chartWidth = SCREEN_WIDTH - 48;

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Impact Intensity</Text>
        <View style={[styles.badge, { borderColor: color }]}>
          <View style={[styles.dot, { backgroundColor: color }]} />
          <Text style={[styles.badgeText, { color }]}>LIVE</Text>
        </View>
      </View>

      {/* Current Value */}
      <View style={styles.valueRow}>
        <Text style={[styles.valueText, { color }]}>
          {currentValue.toFixed(1)}
        </Text>
        <View style={styles.valueMeta}>
          <Text style={styles.valueUnit}>/ 100</Text>
          <Text style={styles.valueLabel}>INTENSITY</Text>
        </View>
      </View>

      {/* Chart */}
      <View style={styles.chartContainer}>
        <LineChart
          data={dataPoints}
          width={chartWidth}
          height={verticalScale(150)}
          color={color}
          thickness={2.5}
          areaChart
          startFillColor={color}
          endFillColor={"#111113"}
          startOpacity={0.22}
          endOpacity={0.0}
          curved
          curvature={0.3}
          noOfSections={4}
          maxValue={100}
          yAxisColor="transparent"
          xAxisColor="#2E2E3E"
          yAxisTextStyle={styles.axisText}
          xAxisLabelTextStyle={styles.axisText}
          rulesColor="#1E1E28"
          rulesType="solid"
          hideDataPoints={false}
          dataPointsColor={color}
          dataPointsRadius={3}
          focusEnabled
          showStripOnFocus
          stripColor={color}
          stripOpacity={0.3}
          stripWidth={1.5}
          focusedDataPointColor={color}
          focusedDataPointRadius={6}
          backgroundColor="transparent"
          isAnimated
          animateOnDataChange
          animationDuration={400}
          spacing={(chartWidth - 60) / MAX_POINTS}
          initialSpacing={12}
          endSpacing={12}
          yAxisThickness={0}
          yAxisLabelWidth={32}
        />
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{peak}</Text>
          <Text style={styles.statLabel}>PEAK</Text>
        </View>
        <View style={[styles.statItem, styles.statItemCenter]}>
          <Text style={[styles.statValue, { color }]}>
            {currentValue.toFixed(0)}
          </Text>
          <Text style={styles.statLabel}>NOW</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{avg}</Text>
          <Text style={styles.statLabel}>AVG</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    paddingVertical: spacingY._25,
    margin: spacingY._15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacingY._20,
  },
  title: {
    color: "#F0F0F5",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: -0.3,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: verticalScale(5),
    paddingHorizontal: spacingX._10,
    paddingVertical: spacingY._5,
    borderRadius: 20,
    borderWidth: 1,
  },
  dot: {
    width: verticalScale(6),
    height: verticalScale(6),
    borderRadius: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: verticalScale(8),
    marginBottom: spacingY._7,
  },
  valueText: {
    fontSize: 56,
    fontWeight: "200",
    letterSpacing: -2,
    lineHeight: 60,
  },
  valueMeta: {
    paddingBottom: spacingY._7,
    gap: verticalScale(2),
  },
  valueUnit: {
    color: "#48484A",
    fontSize: 16,
    fontWeight: "300",
  },
  valueLabel: {
    color: "#48484A",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
  },
  chartContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: spacingY._17,
  },
  axisText: {
    color: "#48484A",
    fontSize: 10,
    fontWeight: "500",
  },
  statsRow: {
    flexDirection: "row",
    gap: verticalScale(10),
    marginBottom: spacingY._15,
  },
  statItem: {
    flex: 1,
    backgroundColor: "#111113",
    borderRadius: 12,
    paddingVertical: spacingY._12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E1E28",
  },
  statItemCenter: {
    borderColor: "#2E2E3E",
  },
  statValue: {
    color: "#F0F0F5",
    fontSize: 24,
    fontWeight: "300",
    letterSpacing: -0.5,
  },
  statLabel: {
    color: "#48484A",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    marginTop: spacingY._5,
  },
  scaleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#111113",
    borderRadius: 12,
    padding: verticalScale(12),
    borderWidth: 1,
    borderColor: "#1E1E28",
  },
  scaleItem: {
    alignItems: "center",
    gap: verticalScale(3),
  },
  scaleDot: {
    width: verticalScale(7),
    height: verticalScale(7),
    borderRadius: 4,
  },
  scaleItemLabel: {
    color: "#8E8E93",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },
  scaleItemRange: {
    color: "#48484A",
    fontSize: 10,
  },
});