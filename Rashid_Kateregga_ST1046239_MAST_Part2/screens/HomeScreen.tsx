import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const chefLogo = require('../assets/chef.jpeg');
const backgroundImg = require('../assets/back.jpg'); 

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [menuItems, setMenuItems] = useState<{ dishName: string, description: string, course: string, price: number }[]>([]);

  useEffect(() => {
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem as { dishName: string; description: string; course: string; price: number }]);
    }
  }, [route.params?.newItem]);

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Image source={chefLogo} style={styles.logo} />
        <Text style={styles.title}>Chef's Menu</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Add Menu"
            onPress={() => navigation.navigate('AddMenu')}
            color={styles.button.backgroundColor}
          />
          <Button
            title="Filter Menu"
            onPress={() => navigation.navigate('FilterMenu')}
            color={styles.button.backgroundColor}
          />
        </View>

        <Text>Total Items: {menuItems.length}</Text>

        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text>{item.dishName} - {item.course}</Text>
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
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(240, 248, 255, 0.8)', 
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  menuItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    width: '80%',
  },
  button: {
    backgroundColor: '#FFA500',
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
});
