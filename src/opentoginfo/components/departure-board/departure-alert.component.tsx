import { Train } from '@/models/mit-tog-departures.model';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface DepartureAlertComponentProps {
  departureItem: Train;
}

export default function DepartureAlertComponent({
  departureItem,
}: DepartureAlertComponentProps) {
  const theme = useTheme();

  if (departureItem.IsCancelled) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.errorContainer },
        ]}
      >
        <Text>Cancelled</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
  },
});
