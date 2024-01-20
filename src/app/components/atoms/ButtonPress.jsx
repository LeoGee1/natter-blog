import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonPress = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.customButtonText}>Save Post</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  customButton: {
    padding: 8,
    margin: 8,
    backgroundColor: '#111111',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  customButtonText: {
    color: 'white',
  }

});

export default ButtonPress;
