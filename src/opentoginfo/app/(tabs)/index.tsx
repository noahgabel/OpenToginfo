import TitleComponent from '@/components/title.component';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  return (
    <View>
      <TitleComponent>Stations</TitleComponent>
      <Button
        mode="contained"
        onPress={() =>
          router.push('../departure-board', { relativeToDirectory: true })
        }
      >
        Departure board
      </Button>
    </View>
  );
}
