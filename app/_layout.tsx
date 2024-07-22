import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#040404" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerStyle: { backgroundColor: "#040404" } }}
      />
    </Stack>
  );
}
