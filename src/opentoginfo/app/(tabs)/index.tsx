import Title from '@/components/title.component';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  return (
    <View>
      <Title>Stations</Title>
      <Button
        mode="contained"
        onPress={() =>
          router.push('../departureboard', { relativeToDirectory: true })
        }
      >
        Click me
      </Button>
    </View>
  );
}
