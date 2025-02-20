import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { useTheme, Text, TouchableRipple } from 'react-native-paper';
import { useAppSelector } from '../state/hooks';
import DepartureTimeComponent from './departure-board/departure-time.component';
import DepartureDestinationComponent from './departure-board/departure-destination.component';
import DepartureTrackComponent from './departure-board/departure-track.component';
import DepartureServiceProductComponent from './departure-board/departure-service-product.component';
import DepartureAlertComponent from './departure-board/departure-alert.component';
import { MitTogDeparturesModel } from '../models/mit-tog-departures.model';
import { mapMitTogToDepartureBoard } from '@/strategy/mit-tog-mapper';

export default function DeparturesViewComponent() {
  const theme = useTheme();
  const mitTogDepartures = useAppSelector(
    (state) => state.auth.departures,
  ) as MitTogDeparturesModel | null;

  const departures = mitTogDepartures
    ? mapMitTogToDepartureBoard(mitTogDepartures)
    : [];

  const renderItem = ({ item }: { item: DepartureBoardModel }) => (
    <TouchableRipple
      onPress={() => console.log('Ripple effect clicked')}
      borderless
    >
      <View
        style={[
          styles.row,
          {
            backgroundColor: theme.colors.background,
            borderBottomColor: theme.colors.backdrop,
          },
        ]}
      >
        <View style={styles.primaryRow}>
          <DepartureTimeComponent styles={styles.column} departureItem={item} />
          <DepartureDestinationComponent
            departureItem={item}
            styles={[styles.column, styles.destination]}
          />
          <DepartureTrackComponent
            departureItem={item}
            styles={styles.column}
          />
          <DepartureServiceProductComponent
            styles={styles.column}
            departureItem={item}
          />
        </View>
        <View style={styles.secondaryRow}>
          <View style={{ width: 150, height: 25, overflow: 'hidden' }}>
            <Image
              source={require('../assets/units/MFA-FF.png')}
              style={{
                height: 25,
                width: 200, // Larger than the parent to allow cropping
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
        <View style={styles.thirdRow}>
          <DepartureAlertComponent departureItem={item} />
        </View>
      </View>
    </TouchableRipple>
  );

  return (
    <View>
      <View
        style={[
          styles.header,
          { backgroundColor: theme.colors.primaryContainer },
        ]}
      >
        <Text style={styles.column}>Time</Text>
        <Text style={[styles.column, styles.destination]}>To</Text>
        <Text style={styles.column}>Track</Text>
        <Text style={styles.column}>Train</Text>
      </View>
      <FlatList
        data={departures || []}
        renderItem={renderItem}
        keyExtractor={(item) => item.serviceProduct.trainId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 8,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  primaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    padding: 8,
  },
  secondaryRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  thirdRow: {
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  column: {
    flex: 1,
    textAlign: 'left',
    fontSize: 17,
  },
  destination: {
    flex: 2,
    display: 'flex',
  },
  details: {
    fontSize: 12,
    flex: 1,
    textAlign: 'left',
  },
});
