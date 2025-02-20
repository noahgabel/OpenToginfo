import { TextStyle, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

interface DepartureTimeComponentProps {
  departureItem: DepartureBoardModel;
  styles: TextStyle;
}

export default function DepartureTimeComponent({
  departureItem,
  styles,
}: DepartureTimeComponentProps) {
  const theme = useTheme();

  const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <Text style={[styles, textStyles.TimeText]}>
      {departureItem.estimatedDepartureTime ? (
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
            {formatTime(departureItem.scheduledDepartureTime)}
          </Text>{' '}
          {formatTime(departureItem.estimatedDepartureTime)}
        </>
      ) : (
        formatTime(departureItem.scheduledDepartureTime)
      )}
    </Text>
  );
}

const textStyles = StyleSheet.create({
  TimeText: {
    fontFamily: 'FiraSans_500Medium',
  },
});
