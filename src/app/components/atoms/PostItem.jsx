import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostItem = ({ post }) => {
  return (
    <View style={styles.postCard}>
      <Text style={styles.title}>{post.title}</Text>
      <Text >{post.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: '#449cec',
    color: 'black',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  
  },
});

export default PostItem;
