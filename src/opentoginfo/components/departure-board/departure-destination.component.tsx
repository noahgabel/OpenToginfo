import { TextStyle, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import stationData from '@/assets/data/stations.json';

interface DepartureDestinationComponentProps {
  departureItem: DepartureBoardModel;
  styles: TextStyle | TextStyle[];
}

const getStationNameById = (stationId: string) => {
  const station = stationData.find((s) => s.stationId === stationId);
  return station ? station.stationName : stationId;
};

export default function DepartureDestinationComponent({
  departureItem,
  styles,
}: DepartureDestinationComponentProps) {
  const uniqueDestinations = Array.from(
    new Set(departureItem.destination.map((d) => getStationNameById(d))),
  );
  const text = uniqueDestinations.join(', \n');

  if (departureItem.IsCancelled) {
    return (
      <Text
        style={[
          textStyles.DestinationText,
          styles,
          { color: 'red', textDecorationLine: 'line-through' },
        ]}
      >
        {text}
      </Text>
    );
  } else {
    return <Text style={[textStyles.DestinationText, styles]}>{text}</Text>;
  }
}

const textStyles = StyleSheet.create({
  DestinationText: {
    fontFamily: 'FiraSans_400Regular',
  },
});
