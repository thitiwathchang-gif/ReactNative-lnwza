// app/resort.tsx
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, StatusBar } from "react-native";
import Section1 from "../components/week3/Section1";
import Section2 from "../components/week3/Section2";
import Section3 from "../components/week3/Section3";
import Section4 from "../components/week3/Section4";
import Section5 from "../components/week3/Section5";
import Section6 from "../components/week3/Section6";
import Section7 from "../components/week3/Section7";
import Section8 from "../components/week3/Section8";

export default function ResortScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.sectionWrap}>
          <Section1 />
        </View>

        <View style={styles.sectionWrap}>
          <Section2 />
        </View>

        <View style={styles.sectionWrap}>
          <Section3 />
        </View>

        <View style={styles.sectionWrap}>
          <Section4 />
        </View>

        <View style={styles.sectionWrap}>
          <Section5 />
        </View>

        <View style={styles.sectionWrap}>
          <Section6 />
        </View>

        <View style={styles.sectionWrap}>
          <Section7 />
        </View>

        <View style={styles.sectionWrap}>
          <Section8 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f6f6f6" },
  scroll: { paddingVertical: 8 },
  sectionWrap: {
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 6,
    overflow: "hidden",
    marginHorizontal: 12,
    elevation: 1,
  },
});