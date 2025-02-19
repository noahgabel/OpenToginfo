import { View, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native-paper';
import stationData from '../../assets/data/stationData.json';

export default function Favorites() {
  interface FavoriteItem {
    id: number;
    name: string;
  }

  const [data, setData] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const formattedData = stationData.map((item) => ({
          ...item,
          id: Number(item.id),
        }));
        setData(formattedData);
      } catch (error) {
        console.log('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Add padding to the top
    paddingHorizontal: 16,
  },
  itemContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
});
