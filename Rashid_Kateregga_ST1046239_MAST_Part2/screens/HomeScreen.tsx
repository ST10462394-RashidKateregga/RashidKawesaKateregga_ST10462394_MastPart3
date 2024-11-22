import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { MenuContext } from '../App';

const backgroundImg = require('../assets/back.jpg');

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { menuItems } = useContext(MenuContext);

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Menu</Text>

        {menuItems.length > 0 ? (
          <FlatList
            data={menuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.dishName}>{item.dishName}</Text>
                <Text>{item.description}</Text>
                <Text>{item.course} - ${item.price.toFixed(2)}</Text>
              </View>
            )}
          />
        ) : (
          <Text>No menu items available. Add some!</Text>
        )}

        <Button
          title="Go to Add Menu"
          onPress={() => navigation.navigate('AddMenu', { newItem: undefined })}
        />
        <Button
          title="Go to Filter Menu"
          onPress={() => navigation.navigate('FilterMenu', { menuItems })}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, padding: 20, backgroundColor: 'rgba(240, 248, 255, 0.8)' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { marginBottom: 15 },
  dishName: { fontSize: 18, fontWeight: 'bold' },
});
