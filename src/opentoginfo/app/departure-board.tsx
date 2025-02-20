import DeparturesViewComponent from '@/components/departures-view.component';
import { MitTogDeparturesModel } from '@/models/mit-tog-departures.model';
import { useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import { Accelerometer } from 'expo-sensors';

import { useDispatch } from 'react-redux';
import { setDepartures } from '@/state/departure-reducer';
import { useAppSelector } from '@/state/hooks';

export default function DepartureBoard() {
  const dispatch = useDispatch();
  const activeStationId = useAppSelector((state) => state.auth.activeStationId);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://api.mittog.dk/api/ws/departure/${activeStationId}/dinstation/`,
    );

    const handleShake = async () => {
      const handleShake = async () => {
        console.log(activeStationId);
        const data = JSON.stringify({ activeStationId });
        const fileUri = `${FileSystem.documentDirectory}favoritez.json`;
        await FileSystem.writeAsStringAsync(fileUri, data);
      };
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
  }, [dispatch]);

  return <DeparturesViewComponent />;
}
