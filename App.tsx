import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapView, {Details, Marker, Region} from 'react-native-maps';

const App = () => {
  const regionChange = useCallback((region: Region, details: Details) => {
    console.debug('Region changed', region, details);
  }, []);

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <MapView
        mapType={'mutedStandard'}
        initialCamera={{
          altitude: 10000,
          center: {
            latitude: 37.78808207143802,
            longitude: -122.40752931300878,
          },
          heading: 0,
          pitch: 0,
        }}
        onRegionChangeComplete={regionChange}
        showsPointsOfInterest={false}
        style={StyleSheet.absoluteFill}>

        <Marker
          key='foo'
          title='Example marker'
          coordinate={{
            latitude: 37.78808207143802,
            longitude: -122.40752931300878,
          }}
        />
      </MapView>
    </SafeAreaView>
  );
};

export default App;
