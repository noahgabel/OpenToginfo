import { SplashScreen, Stack } from 'expo-router';
import { StatusBar, useColorScheme, View } from 'react-native';
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
  useFonts,
  FiraSans_100Thin,
  FiraSans_100Thin_Italic,
  FiraSans_200ExtraLight,
  FiraSans_200ExtraLight_Italic,
  FiraSans_300Light,
  FiraSans_300Light_Italic,
  FiraSans_400Regular,
  FiraSans_400Regular_Italic,
  FiraSans_500Medium,
  FiraSans_500Medium_Italic,
  FiraSans_600SemiBold,
  FiraSans_600SemiBold_Italic,
  FiraSans_700Bold,
  FiraSans_700Bold_Italic,
  FiraSans_800ExtraBold,
  FiraSans_800ExtraBold_Italic,
  FiraSans_900Black,
  FiraSans_900Black_Italic,
} from '@expo-google-fonts/fira-sans';
import React from 'react';
import DepartureBoard from './departureboard';

const fontConfig = {
  default: {
    fontFamily: 'FiraSans_400Regular',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  medium: {
    fontFamily: 'FiraSans_500Medium',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  light: {
    fontFamily: 'FiraSans_300Light',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  semibold: {
    fontFamily: 'FiraSans_600SemiBold',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.6,
  },
  bold: {
    fontFamily: 'FiraSans_700Bold',
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
    FiraSans_100Thin,
    FiraSans_100Thin_Italic,
    FiraSans_200ExtraLight,
    FiraSans_200ExtraLight_Italic,
    FiraSans_300Light,
    FiraSans_300Light_Italic,
    FiraSans_400Regular,
    FiraSans_400Regular_Italic,
    FiraSans_500Medium,
    FiraSans_500Medium_Italic,
    FiraSans_600SemiBold,
    FiraSans_600SemiBold_Italic,
    FiraSans_700Bold,
    FiraSans_700Bold_Italic,
    FiraSans_800ExtraBold,
    FiraSans_800ExtraBold_Italic,
    FiraSans_900Black,
    FiraSans_900Black_Italic,
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
        <StatusBar backgroundColor={navigationTheme.colors.background} />
        <View
          style={{
            flex: 1,
            backgroundColor: navigationTheme.colors.background,
          }}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </View>
      </ThemeProvider>
    </PaperProvider>
  );
}
