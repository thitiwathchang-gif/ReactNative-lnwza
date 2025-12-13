// components/week3/Section4.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Section4() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Hotel Description</Text>
        <Text style={styles.text}>
          218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor
          incididunt ut labore et dolore
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 14, paddingVertical: 10 },
  box: {
    padding: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  header: { fontWeight: "700", marginBottom: 6 },
  text: { color: "#444" },
});