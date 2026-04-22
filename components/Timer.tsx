import { spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { router } from "expo-router";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Timer = () => {
      const [elapsed, setElapsed] = useState(0); // total seconds
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
 
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
 
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);
 
  const hours = Math.floor(elapsed / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;
 
  const pad = (n: number) => String(n).padStart(2, "0");
 
  const handlePause = () => {
    setIsRunning((prev) => !prev);
  };
 
  const handleStop = () => {
     router.back() 
  };
 
  return (
    <View style={styles.container}>
 
      {/* Label */}
      <Text style={styles.label}>
        {isRunning ? "Running" : elapsed === 0 ? "Stopped" : "Paused"}
      </Text>
 
      {/* Time Display */}
      <View style={styles.timeRow}>
        <View style={styles.timeBlock}>
          <Text style={styles.timeValue}>{pad(hours)}</Text>
          <Text style={styles.timeUnit}>HRS</Text>
        </View>
 
        <Text style={styles.separator}>:</Text>
 
        <View style={styles.timeBlock}>
          <Text style={styles.timeValue}>{pad(minutes)}</Text>
          <Text style={styles.timeUnit}>MIN</Text>
        </View>
 
        <Text style={styles.separator}>:</Text>
 
        <View style={styles.timeBlock}>
          <Text style={styles.timeValue}>{pad(seconds)}</Text>
          <Text style={styles.timeUnit}>SEC</Text>
        </View>
      </View>
 
      {/* Buttons */}
      <View style={styles.buttonRow}>
        {/* Pause / Resume */}
        <TouchableOpacity
          style={[styles.button, styles.pauseButton]}
          onPress={handlePause}
          activeOpacity={0.8}
        >
          <Text style={styles.pauseButtonText}>
            {isRunning ? "Pause" : "Resume"}
          </Text>
        </TouchableOpacity>
 
        {/* Stop */}
        <TouchableOpacity
          style={[styles.button, styles.stopButton]}
          onPress={handleStop}
          activeOpacity={0.8}
        >
          <Text style={styles.stopButtonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Timer

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacingX._30,
  },
  label: {
    color: "#5A5A6A",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: spacingY._15,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: spacingY._20,
  },
  timeBlock: {
    alignItems: "center",
    minWidth: 80,
  },
  timeValue: {
    color: "#F0F0F5",
    fontSize: 72,
    fontWeight: "200",
    letterSpacing: -2,
    lineHeight: 80,
    fontVariant: ["tabular-nums"],
  },
  timeUnit: {
    color: "#3A3A4A",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2.5,
    marginTop: spacingY._5,
  },
  separator: {
    color: "#2E2E3E",
    fontSize: 56,
    fontWeight: "200",
    lineHeight: 80,
    marginBottom: spacingY._15,
    paddingHorizontal: spacingX._5,
  },
  buttonRow: {
    flexDirection: "row",
    gap: verticalScale(16),
    width: "100%",
  },
  button: {
    flex: 1,
    height: verticalScale(56),
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  pauseButton: {
    backgroundColor: "#1E1E28",
    borderWidth: 1,
    borderColor: "#2E2E3E",
  },
  pauseButtonText: {
    color: "#A0A0B8",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  stopButton: {
    backgroundColor: "#C0392B",
  },
  stopButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});