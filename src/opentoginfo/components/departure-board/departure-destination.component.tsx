import { TextStyle } from 'react-native';
import { Text } from 'react-native-paper';

interface DepartureDestinationComponentProps {
  destination: string[];
  styles: TextStyle | TextStyle[];
}

export default function DepartureDestinationComponent({
  destination,
  styles,
}: DepartureDestinationComponentProps) {
  return <Text style={styles}>{destination.map((d) => d).join(', \n')}</Text>;
}
