import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFavorite } from '../../src/utils/FavoriteContext'; 
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../utils/ThemeContext';

const screenWidth = Dimensions.get('window').width;

export default function ProductInfo() {
  const route = useRoute();
  const { product } = route.params; 
  const { favorites, toggleFavorite } = useFavorite(); 
  const isFavorite = favorites.some(fav => fav.id === product.id); 
  const { isWhiteMode } = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/pageicons/arrow.png')}
            style={[styles.icon, isWhiteMode && styles.iconDark]}
          />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity>
          <Image
            source={require('../assets/images/pageicons/Group.png')}
            style={[styles.icon, isWhiteMode && styles.iconDark]}
          />
        </TouchableOpacity>
      </View>
      <Image source={product.image} style={styles.mainImage} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.rating}>⭐ {product.rating}</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Wishlist Button */}
      <TouchableOpacity
        style={[styles.wishlistButton, isFavorite && styles.wishlistButtonActive]}
        onPress={() => toggleFavorite(product)}
      >
        <Text style={styles.wishlistButtonText}>
          {isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    paddingBottom: 80,
  },
  mainImage: {
    width: screenWidth * 0.9,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 6,
  },
  rating: {
    fontSize: 18,
    color: '#ff6347',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 15,
  },
  icon: { width: 20, height: 20, tintColor: '#333' },
  iconDark: { tintColor: '#FFFFFF' },
  wishlistButton: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    cursor: 'pointer',
  },
  wishlistButtonActive: {
    backgroundColor: '#FF3B30',
  },
  wishlistButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonBefore: {
    position: 'absolute',
    inset: 0,
    left: -4,
    top: -1,
    margin: 'auto',
    width: 128,
    height: 48,
    borderRadius: 10,
    backgroundColor: 'linear-gradient(to bottom right, #e81cff, #40c9ff)', // React Native doesn't support CSS gradients natively
    zIndex: -10,
  },
  buttonAfter: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'linear-gradient(to bottom right, #fc00ff, #00dbde)',
    transform: 'scale(0.95)',
    filter: 'blur(20px)',
    zIndex: -1,
  },
});
