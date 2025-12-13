// components/week3/Section6.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Section6() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Text style={styles.addr}>
        218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor incididunt
        ut labore et...
      </Text>
      <Image
        source={{ uri: "https://picsum.photos/320/180?map" }}
        style={styles.map}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 14, paddingVertical: 10 },
  title: { fontWeight: "700", marginBottom: 6 },
  addr: { marginBottom: 8, color: "#555" },
  map: {
    width: "100%",
    height: 140,
    borderRadius: 6,
  },
});