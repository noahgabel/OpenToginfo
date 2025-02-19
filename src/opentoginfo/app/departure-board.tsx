import DeparturesViewComponent from '@/components/departures-view.component';
import { MitTogDeparturesModel } from '@/models/mit-tog-departures.model';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDepartures } from '@/state/departure-reducer';

export default function DepartureBoard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket(
      'wss://api.mittog.dk/api/ws/departure/KH/dinstation/',
    );

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as MitTogDeparturesModel;
        dispatch(setDepartures(data));
      } catch (error) {}
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);

  return <DeparturesViewComponent />;
}
