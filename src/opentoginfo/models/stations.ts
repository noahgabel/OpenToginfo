export interface StationModel {
  id: number;
  stationName: string;
  stationId: string;
  searchable: boolean;
  regional: boolean;
  strain: boolean;
  longitude: string;
  latitude: string;
  distance: number | null;
}
