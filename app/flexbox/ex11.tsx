import React from 'react';
import { View } from 'react-native';

export default function Ex11() {
  return (
    <View style={{
flex: 1,
     flexDirection: 'column',
     }}>

      <View style={{ flex:1, backgroundColor : '#4A90E2' ,}}></View>

<View style={{ flex:2, backgroundColor : '#4A90E2' ,}}></View>
<View style={{ flex:3, backgroundColor : '#4A90E2' ,}}></View>
<View style={{ flex:4, backgroundColor : '#4A90E2' ,}}></View>


<View style={{ flex:5, backgroundColor : '#50E3C2' ,}}></View>
<View style={{ flex:6, backgroundColor : '#50E3C2' ,}}></View>

    </View>
  );
}
