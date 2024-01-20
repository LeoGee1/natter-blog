import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const MainInputField = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.inputField}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    padding: 8,
    margin: 8,
    borderWidth: 1,
    borderColor: '#449cec',
    borderRadius: 4,
    color: 'purple',
  },
});

export default MainInputField;
