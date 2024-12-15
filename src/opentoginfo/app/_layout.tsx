import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import {
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { adaptNavigationTheme } from 'react-native-paper';
import merge from 'deepmerge';

import { Colors } from '../constants/Colors';

const fontConfig = {
  regular: { fontFamily: 'SpaceGrotesk-Regular', fontWeight: '400' as const },
  medium: { fontFamily: 'SpaceGrotesk-Medium', fontWeight: '500' as const },
  bold: { fontFamily: 'SpaceGrotesk-Bold', fontWeight: '700' as const },
  heavy: { fontFamily: 'SpaceGrotesk-Bold', fontWeight: '800' as const },
  displayLarge: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400' as const,
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: 0,
  },
  displayMedium: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400' as const,
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400' as const,
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400' as const,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  bodyMedium: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400' as const,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontWeight: '400' as const,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
};

const customFontConfig = configureFonts({ config: fontConfig });

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...Colors.dark,
  },
  fonts: {
    ...customFontConfig,
  },
};

const customLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...Colors.light,
  },
  fonts: {
    ...customFontConfig,
  },
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
  fonts: fontConfig,
});

const CombinedDarkTheme = merge(DarkTheme, {
  colors: {
    ...DarkTheme.colors,
    ...customDarkTheme.colors,
  },
  fonts: fontConfig,
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
