import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const backgroundImg = require('../assets/back.jpg');

type MenusScreenProps = NativeStackScreenProps<RootStackParamList, 'Menus'>;

export default function MenusScreen({ route, navigation }: MenusScreenProps) {
  const [menuItems, setMenuItems] = useState<
    { dishName: string; description: string; course: string; price: number }[]
  >([]);

  useEffect(() => {
    if (route.params?.newItem) {
      const newItems = route.params?.newItem || [];
      setMenuItems(newItems);
    }
  }, [route.params?.newItem]);

  const removeItem = (index: number) => {
    const updatedItems = menuItems.filter((_, itemIndex) => itemIndex !== index);
    setMenuItems(updatedItems);
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Menu Items</Text>

        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>{item.dishName}</Text>
              <Text>{item.description}</Text>
              <Text>{item.course} - ${item.price}</Text>
              <Button title="Remove" onPress={() => removeItem(index)} color="#FF0000" />
            </View>
          )}
        />

        <Button
          title="Back"
          onPress={() => navigation.goBack()}
          color="#FFA500"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, padding: 20, backgroundColor: 'rgba(240, 248, 255, 0.8)' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  menuItem: { marginBottom: 10, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 5 },
  menuText: { fontSize: 18, fontWeight: 'bold' },
});
