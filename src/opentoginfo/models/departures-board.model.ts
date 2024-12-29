interface DeparturesBoardModel {
  scheduledDepartureTime: string;
  estimatedDepartureTime: string | null;
  previousTrack: string;
  newTrack: string;
  destination: string[];
  serviceProduct: ServiceProduct;
}

interface ServiceProduct {
  friendlyName: string;
  primaryColor: string;
  secondaryColor: string;
}
