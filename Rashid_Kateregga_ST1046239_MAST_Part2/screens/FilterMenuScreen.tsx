import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const backgroundImg = require('../assets/back.jpg');

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>;

export default function FilterMenuScreen({ route, navigation }: FilterMenuScreenProps) {
  const menuItems = route.params?.menuItems || [];
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const filterByCourse = (course: string) => {
    setFilteredItems(menuItems.filter(item => item.course === course));
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Filter Menu</Text>
        <View style={styles.buttonContainer}>
          <Button title="Show Starters" onPress={() => filterByCourse('Starters')} color="#FFA500" />
          <Button title="Show Mains" onPress={() => filterByCourse('Mains')} color="#FFA500" />
          <Button title="Show Desserts" onPress={() => filterByCourse('Desserts')} color="#FFA500" />
          <Button title="Clear Filter" onPress={() => setFilteredItems(menuItems)} color="#FFA500" />
        </View>

        <FlatList
          data={filteredItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.dishName}>{item.dishName} - {item.course}</Text>
              <Text>{item.description}</Text>
              <Text>${item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(240, 248, 255, 0.8)', // Same background color overlay
  },
  title: { fontSize: 24, marginBottom: 20 },
  menuItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '100%',
  },
  dishName: { fontSize: 16, fontWeight: 'bold' },
  buttonContainer: {
    flexDirection: 'column', // Changed from 'row' to 'column' for vertical stacking
    justifyContent: 'center',
    alignItems: 'center', // Center the buttons
    marginTop: 30,
    width: '80%', // Adjust button container width
  },
});
