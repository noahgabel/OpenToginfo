import { View } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';

export default function Settings() {
  const resetFavorites = async () => {
    const fileUri = FileSystem.documentDirectory + 'favoritez.json';
    try {
      await FileSystem.deleteAsync(fileUri);
      console.log('Favorites reset successfully');
    } catch (error) {
      console.error('Error resetting favorites:', error);
    }
  };

  return (
    <View>
      <Text>Settings</Text>
      <Button onPress={resetFavorites}>Reset favorites</Button>
    </View>
  );
}
