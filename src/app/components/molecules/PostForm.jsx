import { View, StyleSheet } from 'react-native';
import ButtonPress from '../atoms/ButtonPress';
import MainPostCard from '../atoms/PostItem';
import MainInputField from '../atoms/InputArea';


const PostForm = () => {
     const [title, setTitle] = useState('');
     const [content, setContent] = useState('');

  const handleSavePost = () => {
    onsave({title, content})
    setTitle('');
    setContent('');
  };

  return  (
    <View>
      <MainInputField 
        value={newPost.title}
        onChangeText={(text) => setNewPost({ ...newPost, title: text })}
        placeholder="Enter title"
      />
     <MainInputField 
       value={newPost.content}
       onChangeText={(text) => setNewPost({ ...newPost, content: text })}
       placeholder="Enter content"
     />
      <ButtonPress onPress={handleSavePost}/>
    </View>
  );
};

export default PostForm;