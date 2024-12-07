import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Splash = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000); 
    }, []);

  return (
    <View style={styles.container}>
      {/* Display the logo here */}
      <Image
        source={require('../../assets/images/logoWhite.png')} // Ensure correct path to logo
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Set the background color
  },
  logo: {
    marginLeft: 15,
    width: 250, // Set width of the logo
    height: 250, // Set height of the logo
  },
});

export default Splash;
