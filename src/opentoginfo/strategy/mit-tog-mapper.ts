import {
  MitTogDeparturesModel,
  Train,
} from '../models/mit-tog-departures.model';
import { mapMitTogToServiceProduct } from './service-product-mapper';

export function mapMitTogToDepartureBoard(
  mitTogDepartures: MitTogDeparturesModel,
): DepartureBoardModel[] {
  return mitTogDepartures.data.Trains.map((train: Train) => ({
    scheduledDepartureTime: train.ScheduleTimeDeparture,
    estimatedDepartureTime: train.EstimatedTimeDeparture,
    newTrack: train.TrackCurrent,
    originalTrack: train.TrackPrevious,
    destination: train.Routes.map((route) => route.DestinationStationId),
    serviceProduct: mapMitTogToServiceProduct(train),
    IsCancelled: train.IsCancelled,
    IsCancelledDeparture: train.IsCancelledDeparture,
    IsCancelledArrival: train.IsCancelledArrival,
  }));
}
