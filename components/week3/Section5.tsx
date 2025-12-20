// components/week3/Section5.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

export default function Section5() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 14, paddingVertical: 10 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: "#ccc",
    borderRadius: 6,
  },
});