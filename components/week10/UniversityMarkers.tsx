import React from "react";
import { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function UniversityMarkers(props: any) {
  return props.items.map((item: any) => (
    <Marker
      key={item.id.toString()}
      coordinate={{
        latitude: Number(item.latitude),
        longitude: Number(item.longitude),
      }}
      title={item.name}
      description={item.address}
    >
      <FontAwesome name="university" size={20} color="tomato" />
    </Marker>
  ));
}