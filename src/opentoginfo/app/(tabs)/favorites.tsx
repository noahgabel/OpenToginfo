import React, { useEffect, useState } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import { Button, Text } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import TitleComponent from '@/components/title.component';
import { useDispatch } from 'react-redux';
import { setActiveStation } from '@/state/departure-reducer';
import { router } from 'expo-router';
import { StationModel } from '@/models/stations';

const Favorites = () => {
  const [favorites, setFavorites] = useState<StationModel[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const fetchFavorites = async () => {
    try {
      const fileUri = FileSystem.documentDirectory + 'favoritez.json';
      const fileInfo = await FileSystem.getInfoAsync(fileUri);

      if (fileInfo.exists) {
        const fileContents = await FileSystem.readAsStringAsync(fileUri);
        const favorites = JSON.parse(fileContents) as StationModel[];
        setFavorites(favorites);
      } else {
        console.log('File does not exist');
        setFavorites([]);
      }
    } catch (error) {
      console.error('Error reading favorites from file:', error);
      setFavorites([]);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchFavorites();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <TitleComponent>Favorites</TitleComponent>
      {favorites.length > 0 ? (
        favorites.map((favorite, index) => (
          <Button
            key={index}
            style={{ marginBottom: 5 }}
            mode="outlined"
            onPress={() => onClickOfStation(favorite)}
          >
            {favorite.stationName}
          </Button>
        ))
      ) : (
        <Text>No favorites found</Text>
      )}
    </ScrollView>
  );

  function onClickOfStation(station: StationModel): void {
    dispatch(setActiveStation(station));
    return router.push(`../departure-board/`);
  }
};

export default Favorites;
