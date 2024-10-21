import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';


const backgroundImg = require('../assets/back.jpg');

type FilterMenuScreenProps = NativeStackScreenProps<RootStackParamList, 'FilterMenu'>;

export default function FilterMenuScreen({ navigation }: FilterMenuScreenProps) {
  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Filter Menu</Text>
        {/* You can add your filtering functionality here */}
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
    backgroundColor: 'rgba(240, 248, 255, 0.8)', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
});
