// components/week3/Section8.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Section8() {
  return (
    <View style={styles.container}>
      <View style={styles.rowSpace}>
        <View style={styles.column}>
          <Text style={styles.title}>Price</Text>
          <Text style={styles.price}>$399.99</Text>
          <Text style={styles.perNight}>/night</Text>
        </View>

        <View style={styles.columnRight}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 14, paddingVertical: 10 },
  rowSpace: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  column: {},
  title: { fontSize: 12, color: "#777" },
  price: { fontWeight: "700", fontSize: 18, marginTop: 4 },
  perNight: { color: "#777", fontSize: 12 },
  columnRight: {},
  button: {
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  btnText: { color: "#fff", fontWeight: "700" },
});