export interface MitTogDeparturesModel {
  data: Data;
  pico: any[];
  remarks: any[];
}

export interface Data {
  Id: string;
  Trains: Train[];
  StationId: string;
  TrackId: any;
  Type: string;
  Created: string;
  OccupiedTrackSections: any;
}

export interface Train {
  TrainId: string;
  PublicTrainId: string;
  TOC: string;
  Product: string;
  LineName: any;
  ScheduleTime: string;
  ScheduleTimeArrival: string;
  ScheduleTimeDeparture: string;
  EstimatedTimeArrival: string;
  EstimatedTimeDeparture: string;
  DelayTime: string;
  TargetStation: any[];
  TrackCurrent: string;
  TrackPrevious: any;
  TrackOriginal: any;
  IsCancelled: boolean;
  IsCancelledArrival: boolean;
  IsCancelledDeparture: boolean;
  Routes: Route[];
  PreTrain: string[];
  PostTrain: any[];
  PreTrainStationId?: string;
  MayDepartEarly: boolean;
  IsFirstCommercialStop: boolean;
  IsLastStop: boolean;
  InformationType: string;
  TrainArrived: string;
  TrainDeparted: string;
  StopType: string;
  ArrivalDirection: string;
  DepartureDirection: string;
  TrainType: string;
  ChangesTo: any[];
  ForceInSameTrackWith: string;
  InSameTrackWith: any[];
  Remark: string;
  TrainPrioritized: boolean;
  AwaitsTime: boolean;
  AwaitsTimeStartTime: string;
  AwaitsTimeEndTime: string;
  AwaitsTimeEnabledGlobally: boolean;
}

export interface Route {
  Stations: Station[];
  DestinationStationId: string;
  OriginStationId: string;
  UnitType: string;
  UnitId: string;
  NotAccessibleToPassengers: boolean;
  Doors: Door[];
  Remarks: any[];
  ViaStation?: string;
  GeneratedBy: string;
  PreTrainScheduleDate?: string;
  PreTrainTrainNumber?: string;
  PostTrainScheduleDate?: string;
  PostTrainTrainNumber: string;
  PostTrainStationId?: string;
}

export interface Station {
  StationId: string;
  ExpectedDateTime?: string;
  IsCancelledArrival: boolean;
  IsCancelledDeparture: boolean;
  IsCancelled: boolean;
}

export interface Door {
  Number: string;
  Services: string[];
  Remark: any;
}
