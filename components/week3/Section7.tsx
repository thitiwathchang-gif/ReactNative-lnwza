// components/week3/Section7.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Section7() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Room Type</Text>

      <View style={styles.room}>
        <Image
          source={{ uri: "https://picsum.photos/120/90?room" }}
          style={styles.roomImage}
        />
        <View style={styles.roomDesc}>
          <Text style={styles.roomTitle}>Standard Twin Room</Text>
          <Text style={styles.price}>$399.99</Text>
          <Text style={styles.hurry}>Hurry Up! This is your last room!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 14, paddingVertical: 10 },
  header: { fontWeight: "700", marginBottom: 8 },
  room: { flexDirection: "row", alignItems: "center" },
  roomImage: { width: 90, height: 70, borderRadius: 6, marginRight: 12 },
  roomDesc: { flex: 1 },
  roomTitle: { fontWeight: "700" },
  price: { color: "#E74C3C", marginTop: 4, fontWeight: "700" },
  hurry: { marginTop: 6, color: "#777", fontSize: 12 },
});