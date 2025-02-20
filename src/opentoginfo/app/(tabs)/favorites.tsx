import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const fileUri = FileSystem.documentDirectory + 'favoritez.json';
        const fileInfo = await FileSystem.getInfoAsync(fileUri);

        if (fileInfo.exists) {
          const fileContents = await FileSystem.readAsStringAsync(fileUri);
          const favorites = JSON.parse(fileContents);
          setFavorites(favorites);
        } else {
          console.log('File does not exist');
          setFavorites([]);
        }
      } catch (error) {
        console.error('Error reading favorites from file:', error);
        setFavorites([]);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <View>
      {favorites.length > 0 ? (
        favorites.map((favorite, index) => <Text key={index}>{favorite}</Text>)
      ) : (
        <Text>No favorites found</Text>
      )}
    </View>
  );
};

export default Favorites;
