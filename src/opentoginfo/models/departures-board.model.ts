interface DeparturesBoardModel {
  scheduledDepartureTime: string;
  estimatedDepartureTime: string | null;
  newTrack: string | null;
  originalTrack: string;
  destination: string[];
  serviceProduct: ServiceProduct;
  IsCancelled: boolean;
  IsCancelledDeparture: boolean;
  IsCancelledArrival: boolean;
}

interface ServiceProduct {
  friendlyName: string;
  primaryColor: string;
  secondaryColor: string;
}
