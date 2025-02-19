import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Platform, View } from 'react-native';


const Layout = () => {
  const theme = useTheme();
  const isDarkTheme = theme.dark;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          borderTopWidth: 0,
          height: 55,
        },
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: isDarkTheme ? DarkTheme.colors.card : DefaultTheme.colors.card }} />
        ),
        tabBarActiveTintColor: theme.colors.text,
        tabBarLabelStyle: { fontSize: 12 },
        headerStyle: { backgroundColor: theme.colors.card },
        headerTitleStyle: { paddingTop: 5 },
        sceneStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

