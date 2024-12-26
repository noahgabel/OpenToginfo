import { MitTogDeparturesModel } from '@/models/mit-tog-departures.model';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme, Text, TouchableRipple } from 'react-native-paper';

const mockData = [
  {
    id: '1',
    time: '12:34',
    newTime: '12:35',
    to: 'Copenhagen',
    track: '5',
    train: 'IC 1234',
    details: 'DSB',
  },
  {
    id: '2',
    time: '13:00',
    newTime: '13:01',
    to: 'Aarhus,',
    toExtra: 'Fredericia',
    track: '2',
    train: 'RE 5678',
    details: 'Gokke kollektivet',
  },
  {
    id: '3',
    time: '13:45',
    newTime: '13:46',
    to: 'Odense',
    track: '3',
    train: 'IC 9101',
    details: 'DSB',
  },
];

interface DepartureViewProps {
  departures: MitTogDeparturesModel;
}

export default function DeparturesView() {
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
          <Text style={styles.column}>
            {item.time} {item.newTime}
          </Text>
          <Text style={[styles.column, styles.destination]}>
            {item.to} {item.toExtra}
          </Text>
          <Text style={styles.column}>{item.track}</Text>
          <Text style={styles.column}>{item.train}</Text>
        </View>
        <View style={styles.secondaryRow}>
          <Text style={[styles.details, { color: theme.colors.onBackground }]}>
            {item.details}
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
        keyExtractor={(item) => item.id}
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
