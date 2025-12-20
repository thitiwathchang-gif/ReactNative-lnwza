
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";

export default function Event(props: any) {
  const [events, setEvents] = useState<any[]>([]);

  const loadEvents = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
      );
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Up Coming Events</Text>

      <FlatList
        horizontal
        data={events}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View style={{ marginRight: 10, width: 220 }}>
            <Image
              style={{
                width: 220,
                height: 120,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              source={{ uri: item.uri }}
            />
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#ccc",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, color: "red", textAlign: "center" }}>
                  {item.month}
                </Text>
                <Text style={{ textAlign: "center" }}>{item.date}</Text>
              </View>
              <View style={{ padding: 10 }}>
                <Text>{item.title}</Text>
                <Text style={{ color: "grey" }}>{item.place}</Text>
                <Text style={{ color: "grey" }}>{item.city}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}