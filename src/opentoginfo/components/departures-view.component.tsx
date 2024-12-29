import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme, Text, TouchableRipple } from 'react-native-paper';
import DepartureTimeComponent from './departure-board/departure-time.component';
import DepartureDestinationComponent from './departure-board/departure-destination.component';

const mockData: DeparturesBoardModel[] = [
  {
    scheduledDepartureTime: '10:00',
    estimatedDepartureTime: '10:05',
    destination: ['Odense', 'Fredericia'],
    previousTrack: '2',
    newTrack: '3',
    serviceProduct: {
      friendlyName: 'IC 4',
      primaryColor: '#f00',
      secondaryColor: '#fff',
    },
  },
  {
    scheduledDepartureTime: '10:15',
    estimatedDepartureTime: '10:20',
    destination: ['Aarhus'],
    previousTrack: '2',
    newTrack: '3',
    serviceProduct: {
      friendlyName: 'IC 44',
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
          <DepartureTimeComponent
            styles={styles.column}
            scheduledDepartureTime={item.scheduledDepartureTime}
            estimatedDepartureTime={item.estimatedDepartureTime}
          />
          <DepartureDestinationComponent
            destination={item.destination}
            styles={[styles.column, styles.destination]}
          />
          <Text style={styles.column}>{item.newTrack}</Text>
          <Text style={styles.column}>{item.serviceProduct.friendlyName}</Text>
        </View>
        <View style={styles.secondaryRow}>
          <Text style={[styles.details, { color: theme.colors.onBackground }]}>
            Hej
          </Text>
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
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  primaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
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
