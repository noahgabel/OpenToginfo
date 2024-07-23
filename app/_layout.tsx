import { Stack } from "expo-router";
import Text from "../components/Text";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#040404" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: "#040404" },
          headerTitle: () => (
            <Text fontSize={20} weight={500}>
              Ringsted
            </Text>
          ),
        }}
      />
    </Stack>
  );
}
