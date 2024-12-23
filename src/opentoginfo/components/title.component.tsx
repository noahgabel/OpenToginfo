import { View } from 'react-native';
import { Text } from 'react-native-paper';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <View>
      <Text
        style={{
          fontSize: 36,
          letterSpacing: 1.05,
          paddingTop: 92,
          paddingHorizontal: 12,
          fontFamily: 'FiraSans_700Bold',
        }}
      >
        {children}
      </Text>
    </View>
  );
}
