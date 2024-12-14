import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { adaptNavigationTheme } from 'react-native-paper';
import merge from 'deepmerge';

import { Colors } from '../constants/Colors';

const customFonts = {
  regular: { fontFamily: 'Roboto-Regular', fontWeight: '400' as const },
  medium: { fontFamily: 'Roboto-Medium', fontWeight: '500' as const },
  bold: { fontFamily: 'Roboto-Bold', fontWeight: '700' as const },
  heavy: { fontFamily: 'Roboto-Black', fontWeight: '900' as const },
};

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...Colors.dark,
  },
  fonts: MD3DarkTheme.fonts,
};

const customLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...Colors.light,
  },
  fonts: MD3LightTheme.fonts,
};

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(LightTheme, {
  colors: {
    ...LightTheme.colors,
    ...customLightTheme.colors,
  },
  fonts: customFonts,
});

const CombinedDarkTheme = merge(DarkTheme, {
  colors: {
    ...DarkTheme.colors,
    ...customDarkTheme.colors,
  },
  fonts: customFonts,
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === 'dark' ? customDarkTheme : customLightTheme;

  const navigationTheme =
    colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={navigationTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
