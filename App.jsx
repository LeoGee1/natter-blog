import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import PostList from './src/app/components/molecules/PostForm';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* <PostList /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
