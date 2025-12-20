// components/week3/Section1.tsx
import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Section1() {
  return (
    <View style={styles.row}>
      <Image
        source={{ uri: "https://picsum.photos/300/200" }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 12,
  },
  image: {
    flex: 1,
    height: 140,
    borderRadius: 8,
  },
});