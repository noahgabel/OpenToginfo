import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MitTogDeparturesModel } from '../models/mit-tog-departures.model';

interface DepartureState {
  departures: MitTogDeparturesModel | null;
  activeStationId: string | null;
}

const initialState: DepartureState = {
  departures: null,
  activeStationId: null,
};

const departureSlice = createSlice({
  name: 'departures',
  initialState,
  reducers: {
    setDepartures(state, action: PayloadAction<MitTogDeparturesModel>) {
      state.departures = action.payload;
    },
    setActiveStationId(state, action: PayloadAction<string>) {
      state.activeStationId = action.payload;
    },
  },
});

export const { setDepartures, setActiveStationId } = departureSlice.actions;
export default departureSlice.reducer;
