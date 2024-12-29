import { TextStyle, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface DepartureDestinationComponentProps {
  destination: string[];
  styles: TextStyle | TextStyle[];
}

export default function DepartureDestinationComponent({
  destination,
  styles,
}: DepartureDestinationComponentProps) {
  return (
    <Text style={[textStyles.DestinationText, styles]}>
      {destination.map((d) => d).join(', \n')}
    </Text>
  );
}

const textStyles = StyleSheet.create({
  DestinationText: {
    fontFamily: 'FiraSans_400Regular',
  },
});
