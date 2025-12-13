import React from "react";
import { ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props: any) {
  const dummy = [
    { id: "1", title: "Tour in Somewhere", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
    { id: "2", title: "Tour in Somewhere", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
    { id: "3", title: "Tour in Somewhere", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
  ];

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Tour</Text>
      <Text style={{ color: "grey" }}>
        Let find out what most interesting things
      </Text>

      <ScrollView horizontal={true} style={{ marginTop: 20 }}>
        {dummy.map((item) => (
          <TourItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}