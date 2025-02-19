import TitleComponent from '@/components/title.component';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { useState } from 'react';
import stationData from '@/assets/data/stationData.json';
import { useDispatch } from 'react-redux';
import { setActiveStationId } from '@/state/departure-reducer';

export default function Index() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filteredStations = stationData.filter((station) =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
          style={{ marginBottom: 15 }}
          key={station.id}
          mode="outlined"
          onPress={() => onClickOfStation(station.id)}
        >
          {station.name}
        </Button>
      ))}
      <Button
        mode="contained"
        onPress={() => router.push('../departure-board')}
      >
        Departure board
      </Button>
    </View>
  );

  function onClickOfStation(id: string): void {
    dispatch(setActiveStationId(id));

    return router.push(`../departure-board/`);
  }
}
