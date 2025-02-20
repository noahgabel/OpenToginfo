import TitleComponent from '@/components/title.component';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { useState } from 'react';
import stationData from '@/assets/data/stations.json';
import { useDispatch } from 'react-redux';
import { setActiveStationId } from '@/state/departure-reducer';

export default function Index() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filteredStations = stationData
    .filter(
      (station) =>
        station.searchable &&
        station.regional &&
        (station.stationName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          station.stationId.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    .slice(0, 10);

  return (
    <View>
      <TitleComponent>Stations</TitleComponent>
      <Searchbar
        style={{ marginBottom: 20 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {filteredStations.map((station) => (
        <Button
          style={{ marginBottom: 5 }}
          key={station.id}
          mode="outlined"
          onPress={() => onClickOfStation(station.stationId)}
        >
          {station.stationName}
        </Button>
      ))}
    </View>
  );

  function onClickOfStation(id: string): void {
    dispatch(setActiveStationId(id));

    return router.push(`../departure-board/`);
  }
}
