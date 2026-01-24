import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import UniversityMarkers from "./UniversityMarkers";
import { postData } from "@/utils/api";

export default function MyMapView(props: any) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [universities, setUniversities] = useState<any[]>([]);

  const loadUniversities = async () => {
    const url =
      "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week10/universities.json";
    const res = await fetch(url);
    const json = await res.json();
    setUniversities(json);
  };

  useEffect(() => {
    loadUniversities();
  }, []);

  return (
    <MapView
      style={{ width, height }}
      initialRegion={
        props.location
          ? {
              latitude: props.location.coords.latitude,
              longitude: props.location.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
          : undefined
      }
      showsUserLocation={true}
      onUserLocationChange={(event) => {
        if (!event.nativeEvent.coordinate) return;

        const newLocation = {
          coords: event.nativeEvent.coordinate,
          mocked: false,
          timestamp: event.nativeEvent.coordinate.timestamp,
        };

        props.setLocation(newLocation);

        if (props.recordLocation) {
          postData("/location", {
            user_id: "Student-Week10",
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude,
          });
        }
      }}
    >
      <UniversityMarkers items={universities} />
    </MapView>
  );
}