import { Link } from "expo-router";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import FlexboxMenu from "@/components/FlexboxMenu";
export default function Index() {
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Edit app/index.tsx to edit this screen. Thitiwath</Text>

      <Link href="/flexbox/ex01" style={styles.link}>
        <Text style={styles.linkText}>Ex01</Text>
      </Link>
      <Link href="/flexbox/ex02" style={styles.link}>
        <Text style={styles.linkText}>Ex02</Text>
      </Link>
      <Link href="/flexbox/ex03" style={styles.link}>
        <Text style={styles.linkText}>Ex03</Text>
      </Link>
      <Link href="/flexbox/ex04" style={styles.link}>
        <Text style={styles.linkText}>Ex04</Text>
      </Link>
      <Link href="/flexbox/ex05" style={styles.link}>
        <Text style={styles.linkText}>EX05</Text>
      </Link>
      <Link href="/flexbox/ex06" style={styles.link}>
        <Text style={styles.linkText}>EX06</Text>
      </Link>
      <Link href="/flexbox/ex07" style={styles.link}>
        <Text style={styles.linkText}>EX07</Text>
      </Link>
      <Link href="/flexbox/ex08" style={styles.link}>
        <Text style={styles.linkText}>EX08</Text>
      </Link>
      <Link href="/flexbox/ex09" style={styles.link}>
        <Text style={styles.linkText}>EX09</Text>
      </Link>
      <Link href="/flexbox/ex10" style={styles.link}>
        <Text style={styles.linkText}>EX10</Text>
      </Link>
      <Link href="/flexbox/ex11" style={styles.link}>
        <Text style={styles.linkText}>EX11</Text>
      </Link>
      <Link href="/flexbox/ex12" style={styles.link}>
        <Text style={styles.linkText}>EX12</Text>
      </Link>
      <Link href="/resort" style={styles.link}>
        <Text style={styles.linkText}>Resort</Text>
      </Link>
      <Link href="/health" style={styles.link}>
        <Text style={styles.linkText}>Health</Text>
      </Link>
      <Link href="/home" style={styles.link}>
  <Text style={styles.linkText}>Home</Text>
</Link>
<Link href="/chart" style={styles.link}>
  <Text style={styles.linkText}>Chart</Text>
</Link>
<Link href="/your-health" style={styles.link}>
  <Text style={styles.linkText}>Your Health</Text>
</Link>
<Link href="/location" style={styles.link}>
    <Text style={styles.linkText}>Location</Text>
</Link>



    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
