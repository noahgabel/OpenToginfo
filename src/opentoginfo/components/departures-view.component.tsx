import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme, Text, TouchableRipple } from 'react-native-paper';
import DepartureTimeComponent from './departure-board/departure-time.component';
import DepartureDestinationComponent from './departure-board/departure-destination.component';
import DepartureAlertComponent from './departure-board/departure-alert.component';
import DepartureTrackComponent from './departure-board/departure-track.component';

const mockData: DeparturesBoardModel[] = [
  {
    scheduledDepartureTime: '10:00',
    estimatedDepartureTime: '10:05',
    destination: ['Odense', 'Fredericia'],
    newTrack: '2',
    originalTrack: '3',
    IsCancelled: false,
    IsCancelledDeparture: false,
    IsCancelledArrival: false,
    serviceProduct: {
      friendlyName: 'IC 4',
      primaryColor: '#f00',
      secondaryColor: '#fff',
    },
  },
  {
    scheduledDepartureTime: '10:15',
    estimatedDepartureTime: null,
    destination: ['Aarhus'],
    newTrack: '2',
    originalTrack: '3',
    IsCancelled: true,
    IsCancelledDeparture: true,
    IsCancelledArrival: true,
    serviceProduct: {
      friendlyName: 'IC 44',
      primaryColor: '#f00',
      secondaryColor: '#fff',
    },
  },
  {
    scheduledDepartureTime: '10:30',
    estimatedDepartureTime: '10:35',
    destination: ['Aalborg'],
    newTrack: '2',
    originalTrack: '3',
    IsCancelled: false,
    IsCancelledDeparture: false,
    IsCancelledArrival: false,
    serviceProduct: {
      friendlyName: 'IC 3',
      primaryColor: '#f00',
      secondaryColor: '#fff',
    },
  },
];

export default function DeparturesViewComponent() {
  const theme = useTheme();

  const renderItem = ({ item }: { item: (typeof mockData)[0] }) => (
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
          <Text style={styles.column}>{item.serviceProduct.friendlyName}</Text>
        </View>
        <View style={styles.secondaryRow}>
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
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.serviceProduct.friendlyName}
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
