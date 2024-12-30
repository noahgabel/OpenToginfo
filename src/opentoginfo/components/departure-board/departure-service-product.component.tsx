import { View, ViewStyle, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface DepartureServiceProductComponentProps {
  departureItem: DepartureBoardModel;
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
        { backgroundColor: departureItem.serviceProduct.primaryColor },
      ]}
    >
      <Text
        style={[
          textStyles.Text,
          { color: departureItem.serviceProduct.secondaryColor },
        ]}
      >
        {departureItem.serviceProduct.friendlyName}
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
