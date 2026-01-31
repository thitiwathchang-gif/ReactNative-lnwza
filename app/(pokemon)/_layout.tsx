import { Tabs } from "expo-router";

export default function PokemonLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="charmander"
        options={{ title: "Charmander" }}
      />
      <Tabs.Screen
        name="pikachu"
        options={{ title: "Pikachu" }}
      />
      <Tabs.Screen
        name="ivysaur"
        options={{ title: "Ivysaur" }}
      />
    </Tabs>
  );
}