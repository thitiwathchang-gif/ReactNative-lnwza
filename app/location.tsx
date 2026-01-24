import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import MyMapView from "@/components/week10/MyMapView";
import { getLocation } from "@/utils/gps";

export default function Location() {
  const navigation = useNavigation();
  const [location, setLocation] = useState<any>(null);
  const [recordLocation, setRecordLocation] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Link href="/location-quiz">
          <Text>Quiz</Text>
        </Link>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const loc = await getLocation();
      setLocation(loc);
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>
        {location ? new Date(location.timestamp).toString() : "-"}
      </Text>

      <View style={{ flex: 1 }}>
        <MyMapView
          location={location}
          setLocation={setLocation}
          recordLocation={recordLocation}
        />
      </View>

      <TouchableOpacity
        onPress={() => setRecordLocation(!recordLocation)}
        style={{
          position: "absolute",
          right: 30,
          bottom: 30,
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "lightblue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome
          name={recordLocation ? "pause" : "play"}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
}