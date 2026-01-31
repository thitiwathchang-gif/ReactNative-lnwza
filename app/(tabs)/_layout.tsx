import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "tomato" }}>
      <Tabs.Screen
        name="ant"
        options={{
          title: "Ant",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bug" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bird"
        options={{
          title: "Bird",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="twitter" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cat"
        options={{
          title: "Cat",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="paw" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}