import DeparturesView from '@/components/departures-view.component';
import { MitTogDeparturesModel } from '@/models/mit-tog-departures.model';
import { useEffect, useState } from 'react';

export default function DepartureBoard() {
  const [departures, setDepartures] = useState<MitTogDeparturesModel>();

  useEffect(() => {
    const ws = new WebSocket(
      'wss://api.mittog.dk/api/ws/departure/KH/dinstation/',
    );

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as MitTogDeparturesModel;
        const newDepartures = data;
        setDepartures(newDepartures);
        console.log(
          'Received new departures:',
          departures?.data.Trains[0].EstimatedTimeDeparture,
        );
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return <DeparturesView />;
}
