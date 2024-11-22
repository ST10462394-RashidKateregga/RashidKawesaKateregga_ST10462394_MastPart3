import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const backgroundImg = require('../assets/back.jpg');

type AddMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'AddMenu'>;

export default function AddMenuScreen({ navigation }: AddMenuScreenProps) {
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const handleAddMenuItem = () => {
    if (dishName && description && course && price) {
      const newMenuItem = {
        dishName,
        description,
        course,
        price: parseFloat(price),
      };
      setMenuItems([...menuItems, newMenuItem]);
      
      // Navigate back to Home with an empty `newItem`
      navigation.navigate('Home', { newItem: undefined });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Add New Menu Item</Text>

        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dishName}
          onChangeText={setDishName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <Picker
          selectedValue={course}
          style={styles.picker}
          onValueChange={itemValue => setCourse(itemValue)}>
          <Picker.Item label="Select Course" value="" />
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Mains" value="Mains" />
          <Picker.Item label="Desserts" value="Desserts" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <Button title="Add Menu Item" onPress={handleAddMenuItem} color="#FFA500" />
        <Button title="Back to Home" onPress={() => navigation.navigate('Home', { newItem: undefined })} color="#FFA500" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'rgba(240, 248, 255, 0.8)' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, width: '100%' },
  picker: { height: 50, width: '100%' },
});
