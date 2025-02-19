import { Train } from '@/models/mit-tog-departures.model';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface DepartureServiceProductComponentProps {
  departureItem: Train;
  styles: ViewStyle;
}

export default function DepartureServiceProductComponent({
  departureItem,
  styles,
}: DepartureServiceProductComponentProps) {
  return (
    <View
      style={[
        styles,
        viewStyles.ServiceProduct,
        { backgroundColor: 'transparent' },
      ]}
    >
      <Text style={[textStyles.Text]}>
        {departureItem.Product} {departureItem.TrainId}
      </Text>
    </View>
  );
}

const viewStyles = StyleSheet.create({
  ServiceProduct: {
    height: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});

const textStyles = StyleSheet.create({
  Text: {
    textAlign: 'center',
  },
});
