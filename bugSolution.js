The issue is likely due to incompatibility between react-native-maps and Expo Go.  Switching to a different mapping library often resolves this problem.  The following code uses react-native-maps-directions, a robust alternative:

```javascript
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps'; // Import from react-native-maps-directions
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Marker" description="This is a marker" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
```

Remember to install the necessary package:
```bash
yarn add react-native-maps-directions
```