import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { Platform, View, StyleSheet, Text } from 'react-native';
import { useColorScheme } from 'react-native';

const Layout = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <Tabs
        sceneContainerStyle={{ backgroundColor: theme.colors.card }}
        screenOptions={{
          tabBarStyle: {
            paddingBottom: Platform.OS === 'ios' ? 20 : 0,
            borderTopWidth: 0,
            height: 55,
            backgroundColor: theme.colors.card,
          },
          tabBarActiveTintColor: theme.colors.text,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarLabelStyle: { fontSize: 12 },
          headerStyle: { backgroundColor: theme.colors.card },
          headerTitleStyle: { paddingTop: 5, color: theme.colors.text },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            headerBackgroundContainerStyle: {
              backgroundColor: theme.colors.card,
            },
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            headerBackgroundContainerStyle: {
              backgroundColor: theme.colors.card,
            },
            tabBarIcon: ({ color }) => (
              <AntDesign name="setting" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default Layout;
