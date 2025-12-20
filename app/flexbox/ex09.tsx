import React from 'react';
import { View } from 'react-native';

export default function Ex09() {
  return (
    <View style={{ flex : 3 , flexDirection : 'column',
     justifyContent: 'space-around', }}>
          <View style={{ flex : 3 , flexDirection : 'row',
     justifyContent: 'space-between', }}>
      <View style={{ backgroundColor : '#50E3C2' ,height : 100, width : 100  }}></View>
<View style={{ backgroundColor : '#50E3C2' ,height : 100, width : 100  }}></View>
<View style={{ backgroundColor : '#50E3C2' ,height : 100, width : 100  }}></View>
</View>
<View style={{ flex : 3 , flexDirection : 'row',
     justifyContent: 'space-between',alignItems: 'center',  }}>
      <View style={{ backgroundColor : '#4A90E2' ,height : 100, width : 100  }}></View>
      <View style={{ backgroundColor : '#4A90E2' ,height : 100, width : 100  }}></View>
<View style={{ backgroundColor : '#4A90E2' ,height : 100, width : 100  }}></View>
</View>
<View style={{ flex : 3 , flexDirection : 'row',
     justifyContent: 'space-between', alignItems: 'flex-end',}}>
      <View style={{ backgroundColor : '#9013FE' ,height : 100, width : 100  }}></View>
  <View style={{ backgroundColor : '#9013FE' ,height : 100, width : 100  }}></View>
<View style={{ backgroundColor : '#9013FE' ,height : 100, width : 100  }}></View>
</View>
    </View>
  );
}
