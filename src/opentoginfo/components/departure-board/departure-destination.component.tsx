import { TextStyle, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface DepartureDestinationComponentProps {
  departureItem: DepartureBoardModel;
  styles: TextStyle | TextStyle[];
}

export default function DepartureDestinationComponent({
  departureItem,
  styles,
}: DepartureDestinationComponentProps) {
  const text = departureItem.destination.map((d) => d).join(', \n');

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
