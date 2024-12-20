import { SplashScreen, Stack } from 'expo-router';
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
import {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
  useFonts,
} from '@expo-google-fonts/space-grotesk';
import React from 'react';

const fontConfig = {
  default: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20, // Increased for better spacing
    letterSpacing: 0.25,
  },
  medium: {
    fontFamily: 'SpaceGrotesk_500Medium',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  light: {
    fontFamily: 'SpaceGrotesk_300Light',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  semibold: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.6,
  },
  bold: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.7,
  },
} as const;

const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...Colors.dark,
  },
  fonts: configureFonts({ config: fontConfig }),
};

const customLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...Colors.light,
  },
  fonts: configureFonts({ config: fontConfig }),
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
  fonts: configureFonts({ config: fontConfig }),
});

const CombinedDarkTheme = merge(DarkTheme, {
  colors: {
    ...DarkTheme.colors,
    ...customDarkTheme.colors,
  },
  fonts: configureFonts({ config: fontConfig }),
});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === 'dark' ? customDarkTheme : customLightTheme;

  const navigationTheme =
    colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme;

  if (!loaded && !error) {
    return null;
  }

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={navigationTheme as any}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
