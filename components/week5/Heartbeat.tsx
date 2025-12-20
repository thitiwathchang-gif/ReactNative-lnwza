// components/week5/Heartbeat.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
  // state เก็บจำนวนครั้งที่กดหัวใจ
  const [count, setCount] = useState(0);

  const onPressHeart = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* Icon หัวใจที่กดได้ */}
      <TouchableOpacity onPress={onPressHeart}>
        <FontAwesome name="heart" size={30} color="orange" />
      </TouchableOpacity>

      {/* แสดงตัวเลขตาม state */}
      <Text style={{ fontSize: 30 }}>{count}</Text>
    </View>
  );
}