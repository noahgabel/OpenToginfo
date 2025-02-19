import { Train } from '@/models/mit-tog-departures.model';
import { TextStyle, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface DepartureTimeComponentProps {
  departureItem: Train;
  styles: TextStyle;
}

export default function DepartureTimeComponent({
  departureItem,
  styles,
}: DepartureTimeComponentProps) {
  const theme = useTheme();

  return (
    <Text style={[styles, textStyles.TimeText]}>
      {departureItem.EstimatedTimeDeparture ? (
        <>
          <Text
            style={[
              styles,
              {
                textDecorationLine: 'line-through',
                color: theme.colors.onSurfaceVariant,
              },
            ]}
          >
            {departureItem.ScheduleTimeDeparture}
          </Text>{' '}
          {departureItem.EstimatedTimeDeparture}
        </>
      ) : (
        departureItem.ScheduleTimeDeparture
      )}
    </Text>
  );
}

const textStyles = StyleSheet.create({
  TimeText: {
    fontFamily: 'FiraSans_500Medium',
  },
});
