import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MitTogDeparturesModel } from '../models/mit-tog-departures.model';
import { StationModel } from '@/models/stations';

interface DepartureState {
  departures: MitTogDeparturesModel | null;
  activeStation: StationModel | null;
}

const initialState: DepartureState = {
  departures: null,
  activeStation: null,
};

const departureSlice = createSlice({
  name: 'departures',
  initialState,
  reducers: {
    setDepartures(state, action: PayloadAction<MitTogDeparturesModel>) {
      state.departures = action.payload;
    },
    setActiveStation(state, action: PayloadAction<StationModel>) {
      state.activeStation = action.payload;
    },
  },
});

export const { setDepartures, setActiveStation } = departureSlice.actions;
export default departureSlice.reducer;
