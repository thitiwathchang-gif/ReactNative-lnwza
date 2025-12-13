// components/week3/Section2.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Section2() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Hilton San Francisco</Text>
      </View>
      <View style={styles.descRow}>
        <Text style={styles.desc}>
          Facilities provided may range from a modest quality mattress in a small
          room to large suites.
        </Text>
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
    marginTop: 25, // ตามสไลด์ marginTop:25
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  descRow: {
    marginTop: 6,
  },
  desc: {
    fontSize: 14,
    color: "#444",
  },
});