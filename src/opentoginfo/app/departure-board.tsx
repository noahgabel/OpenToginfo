import DeparturesView from '@/components/departures-view.component';
import { MitTogDeparturesModel } from '@/models/mit-tog-departures.model';
import { useEffect, useState } from 'react';

export default function DepartureBoard() {
  const [departures, setDepartures] = useState<MitTogDeparturesModel>();

  useEffect(() => {
    const ws = new WebSocket(
      'wss://api.mittog.dk/api/ws/departure/KH/dinstation/',
    );

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as MitTogDeparturesModel;
        setDepartures(data);
      } catch (error) {}
    };

    return () => {
      ws.close();
    };
  }, []);

  return <DeparturesView />;
}
