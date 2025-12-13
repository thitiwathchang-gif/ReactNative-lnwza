import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";

export default function TourFlatList(props: any) {
  const [onlineTours, setOnlineTours] = useState<any[]>([]);

  const loadOnlineTours = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json"
      );
      const data = await res.json();
      setOnlineTours(data);
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  useEffect(() => {
    loadOnlineTours();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Tour with FlatList</Text>
      <Text style={{ color: "grey" }}>
        Let find out what most interesting things
      </Text>

      <FlatList
        horizontal={true}
        data={onlineTours}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View style={{ marginRight: 10 }}>
            <Image
              style={{ width: 200, height: 150, borderRadius: 10 }}
              source={{ uri: item.uri }}
            />
            <View
              style={{
                marginTop: -30,
                height: 30,
                width: 200,
                paddingHorizontal: 10,
                backgroundColor: "black",
                opacity: 0.5,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>
                {item.title}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}