import DeparturesViewComponent from '@/components/departures-view.component';
import { MitTogDeparturesModel } from '@/models/mit-tog-departures.model';
import { useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import { Accelerometer } from 'expo-sensors';
import { Alert } from 'react-native';

import { useDispatch } from 'react-redux';
import { setDepartures } from '@/state/departure-reducer';
import { useAppSelector } from '@/state/hooks';
import { StationModel } from '@/models/stations';

export default function DepartureBoard() {
  const dispatch = useDispatch();
  const activeStation = useAppSelector(
    (state) => state.departure.activeStation,
  );

  useEffect(() => {
    const initializeFavoritesFile = async () => {
      const fileUri = `${FileSystem.documentDirectory}favoritez.json`;

      try {
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (!fileInfo.exists) {
          await FileSystem.writeAsStringAsync(fileUri, JSON.stringify([]));
        }
      } catch (error) {
        console.error('Error initializing favorites file:', error);
      }
    };

    initializeFavoritesFile();

    const ws = new WebSocket(
      `wss://api.mittog.dk/api/ws/departure/${activeStation?.stationId}/dinstation/`,
    );

    const handleShake = async () => {
      const fileUri = `${FileSystem.documentDirectory}favoritez.json`;
      let favorites: StationModel[] = [];

      try {
        const fileInfo = await FileSystem.getInfoAsync(fileUri);
        if (fileInfo.exists) {
          const fileContent = await FileSystem.readAsStringAsync(fileUri);
          favorites = JSON.parse(fileContent) as StationModel[];
        }
      } catch (error) {
        console.error('Error reading favorites file:', error);
      }

      if (activeStation) {
        if (
          favorites.some(
            (station) => station.stationId === activeStation.stationId,
          )
        ) {
          favorites = favorites.filter(
            (station) => station.stationId !== activeStation.stationId,
          );
          Alert.alert(
            'Favorite removed',
            `Station ${activeStation.stationName} removed from favorites.`,
          );
        } else {
          favorites.push(activeStation);
          Alert.alert(
            'Favorite added',
            `Station ${activeStation.stationName} added to favorites.`,
          );
        }

        try {
          await FileSystem.writeAsStringAsync(
            fileUri,
            JSON.stringify(favorites),
          );
          console.log('Favorites written to file:', favorites);
        } catch (error) {
          console.error('Error writing to favorites file:', error);
        }
      }
    };

    let lastAcceleration = { x: 0, y: 0, z: 0 };
    const shakeThreshold = 15;

    const subscription = Accelerometer.addListener((accelerometerData) => {
      const { x, y, z } = accelerometerData;
      const deltaX = Math.abs(lastAcceleration.x - x);
      const deltaY = Math.abs(lastAcceleration.y - y);
      const deltaZ = Math.abs(lastAcceleration.z - z);

      if (deltaX + deltaY + deltaZ > shakeThreshold) {
        handleShake();
      }

      lastAcceleration = { x, y, z };
    });

    Accelerometer.setUpdateInterval(100);

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as MitTogDeparturesModel;
        dispatch(setDepartures(data));
      } catch (error) {}
    };

    return () => {
      subscription && subscription.remove();
      ws.close();
    };
  }, [dispatch, activeStation?.stationId]);

  return <DeparturesViewComponent />;
}
