import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

const courses = ['Starters', 'Mains', 'Desserts'];
const backgroundImg = require('../assets/back.jpg'); 

type AddMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'AddMenu'>;

export default function AddMenuScreen({ navigation }: AddMenuScreenProps) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    const newItem = { dishName, description, course, price: parseFloat(price) };
    navigation.navigate('Home', { newItem });
  };

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.label}>Dish Name:</Text>
        <TextInput style={styles.input} onChangeText={setDishName} value={dishName} />

        <Text style={styles.label}>Description:</Text>
        <TextInput style={styles.input} onChangeText={setDescription} value={description} />

        <Text style={styles.label}>Course:</Text>
        <Picker selectedValue={course} onValueChange={setCourse}>
          {courses.map((course) => (
            <Picker.Item key={course} label={course} value={course} />
          ))}
        </Picker>

        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPrice}
          value={price}
          keyboardType="numeric"
        />

        <Button title="Add Dish" onPress={handleSubmit} color={styles.button.backgroundColor} />
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
    padding: 20,
    backgroundColor: 'rgba(240, 248, 255, 0.8)', 
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFA500',
  },
});