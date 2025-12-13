// components/week3/Section3.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Section3() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.badge}>
          <Text style={styles.score}>9.5</Text>
        </View>
        <View style={styles.texts}>
          <Text style={styles.excellent}>Excellent</Text>
          <Text style={styles.reviews}>See 801 reviews</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ff6b6b",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    elevation: 3,
  },
  score: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
  texts: {
    justifyContent: "center",
  },
  excellent: {
    fontSize: 16,
    fontWeight: "700",
  },
  reviews: {
    fontSize: 12,
    color: "#666",
  },
});