import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Platform, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';

const Layout = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          borderTopWidth: 0,
          height: 55,
          backgroundColor: theme.colors.card,
        },
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
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
        name="favorites"
        options={{
          title: 'Favorites',
          headerShown: false,
          headerBackgroundContainerStyle: {
            backgroundColor: theme.colors.card,
          },
          tabBarIcon: ({ color }) => (
            <AntDesign name="star" size={24} color={color} />
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
