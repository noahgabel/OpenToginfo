import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from '@react-navigation/native';

const Layout = () => {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopWidth: 0,
          height: 55,
        },
        tabBarActiveTintColor: theme.colors.text,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIconStyle: { margin: 0, padding: 0 },
        headerStyle: { backgroundColor: theme.colors.card },
        headerTitleStyle: { paddingTop: 5 },
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

