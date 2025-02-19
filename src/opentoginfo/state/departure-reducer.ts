import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MitTogDeparturesModel } from '../models/mit-tog-departures.model';

interface DepartureState {
  departures: MitTogDeparturesModel | null;
}

const initialState: DepartureState = {
  departures: null,
};

const departureSlice = createSlice({
  name: 'departures',
  initialState,
  reducers: {
    setDepartures(state, action: PayloadAction<MitTogDeparturesModel>) {
      state.departures = action.payload;
    },
  },
});

export const { setDepartures } = departureSlice.actions;
export default departureSlice.reducer;
