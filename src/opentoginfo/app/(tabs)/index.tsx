import { View, StyleSheet } from 'react-native';
import { Card, Text, TouchableRipple, useTheme } from 'react-native-paper';

export default function Index() {
  const theme = useTheme();
  return (
    <View>
      <Text variant="displayLarge">Display Large - Space Grotesk</Text>
      <Text variant="bodyMedium">Body Medium - Space Grotesk</Text>
      <Text style={{ fontFamily: 'SpaceGrotesk-Bold', fontSize: 20 }}>
        Custom Style - Space Grotesk g
      </Text>
      <Card style={[styles.card, { backgroundColor: theme.colors.backdrop }]}>
        <TouchableRipple
          onPress={() => console.log('Ripple effect clicked')}
          borderless
        >
          <View style={styles.content}>
            <Text style={styles.time}>12:34</Text>
            <Text style={styles.destination}>Copenhagen</Text>
            <Text style={styles.track}>5</Text>
            <Text style={styles.train}>IC 1234</Text>
          </View>
        </TouchableRipple>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 8,
  },
  card: {
    borderRadius: 0,
    marginVertical: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  destination: {
    fontSize: 16,
    flex: 2,
    marginLeft: 8,
  },
  track: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
  train: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
});
