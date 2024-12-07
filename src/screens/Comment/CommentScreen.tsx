import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const messages = [
  { id: '1', text: 'Hi, how can I help you?', sender: 'support' },
  { id: '2', text: 'Hello, I ordered two fried chicken burgers. can I know how much time it will get to arrive?', sender: 'user' },
  { id: '3', text: 'Ok, please let me check!', sender: 'support' },
  { id: '4', text: 'Sure...', sender: 'user' },
  { id: '5', text: 'It’ll get 25 minutes to arrive to your address', sender: 'support' },
  { id: '6', text: 'Ok, thanks for your support', sender: 'user' },
];
import { useTheme } from '../../utils/ThemeContext'; // Import useTheme hook

const CommentScreen = () => {
  const renderItem = ({ item }:any) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessageContainer : styles.supportMessageContainer]}>
      <Text style={item.sender === 'user' ? styles.userMessageText : styles.supportMessageText}>{item.text}</Text>
      {item.sender === 'user' && <Image source={require('../../assets/images/profile-pic.png')} style={styles.avatar} />}
    </View>
  );
  const navigation = useNavigation();
  const { isWhiteMode } = useTheme(); // Destructure theme context values
  

  return (
    
    
    <ImageBackground
    source={isWhiteMode ? null : require('../../assets/images/bg1.jpg')}
    style={[styles.container, isWhiteMode && styles.containerDark]}
    resizeMode="cover"
  >

<View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/pageicons/arrow.png')}
            style={[styles.icon, isWhiteMode && styles.iconDark]}
          />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/pageicons/Group.png')}
            style={[styles.icon, isWhiteMode && styles.iconDark]}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Type here..." style={styles.input} placeholderTextColor="#999" />
        <TouchableOpacity style={styles.sendButton}>
          <Image source={require('../../assets/images/pageicons/paper-plane.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f8' },
  containerDark: { backgroundColor: '#FFF' },
  chatContainer: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 80 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 15,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  iconDark: { tintColor: '#333' },
  messageContainer: {
    maxWidth: '75%',
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userMessageContainer: {
    backgroundColor: '#e53935',
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  supportMessageContainer: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
  },
  userMessageText: {
    color: '#fff',
    fontSize: 16,
  },
  supportMessageText: {
    color: '#333',
    fontSize: 16,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  inputContainer: {
    
    position: 'absolute',
    bottom: 86,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 8,
    
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: '#e53935',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});

export default CommentScreen;
