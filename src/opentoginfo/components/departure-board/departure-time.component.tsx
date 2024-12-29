import { TextStyle } from 'react-native';
import { Text } from 'react-native-paper';

interface DepartureTimeComponentProps {
  scheduledDepartureTime: string;
  estimatedDepartureTime: string | null;
  styles: TextStyle;
}

export default function DepartureTimeComponent({
  scheduledDepartureTime,
  estimatedDepartureTime,
  styles,
}: DepartureTimeComponentProps) {
  return (
    <Text style={styles}>
      {estimatedDepartureTime ? (
        <>
          <Text
            style={[
              styles,
              { textDecorationLine: 'line-through', color: 'red' },
            ]}
          >
            {scheduledDepartureTime}
          </Text>{' '}
          {estimatedDepartureTime}
        </>
      ) : (
        scheduledDepartureTime
      )}
    </Text>
  );
}
