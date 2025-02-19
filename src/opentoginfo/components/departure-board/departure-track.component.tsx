import { Train } from '@/models/mit-tog-departures.model';
import { TextStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface DepartureTrackComponentProps {
  departureItem: Train;
  styles: TextStyle;
}

export default function DepartureTrackComponent({
  departureItem,
  styles,
}: DepartureTrackComponentProps) {
  const theme = useTheme();

  return (
    <Text style={[styles]}>
      {departureItem.TrackCurrent ? (
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
            {departureItem.TrackPrevious}
          </Text>{' '}
          {departureItem.TrackCurrent}
        </>
      ) : (
        departureItem.TrackPrevious
      )}
    </Text>
  );
}
