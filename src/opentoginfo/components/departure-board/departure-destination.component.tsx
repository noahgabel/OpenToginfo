import { Train } from '@/models/mit-tog-departures.model';
import { TextStyle, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface DepartureDestinationComponentProps {
  departureItem: Train;
  styles: TextStyle | TextStyle[];
}

export default function DepartureDestinationComponent({
  departureItem,
  styles,
}: DepartureDestinationComponentProps) {
  const text = departureItem.Routes.map(
    (route) => route.DestinationStationId,
  ).join(' - ');

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
