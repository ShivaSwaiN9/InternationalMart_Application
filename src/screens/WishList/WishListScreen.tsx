import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../utils/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { useFavorite } from '../../utils/FavoriteContext'; // Import useFavorite hook

const WishlistScreen = () => {
  const { favorites, toggleFavorite } = useFavorite(); // Directly call useFavorite
  const { isWhiteMode } = useTheme();
  const navigation = useNavigation();

  // Render each wishlist item
  const renderWishlistItem = ({ item }:any) => (
    <TouchableOpacity
      style={styles.wishlistCard}
      onPress={() => navigation.navigate('ProductInfo', { product: item })} // Navigate to ProductInfo with item data
    >
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={() => toggleFavorite(item)}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

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
      <View style={styles.titleContainer}>
        <Text style={[styles.title, isWhiteMode && styles.titleDark]}>
          Your Wishlist
        </Text>
      </View>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderWishlistItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.wishlistContainer}
        />
      ) : (
        <Text style={styles.emptyText}>Your wishlist is empty.</Text>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  containerDark: { backgroundColor: '#FFF' },
  titleContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  titleDark: { color: '#333' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 15,
  },
  icon: { width: 20, height: 20, tintColor: '#FFFFFF' },
  iconDark: { tintColor: '#333' },
  wishlistContainer: { paddingBottom: 20 },
  wishlistCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  productImage: { width: 80, height: 80, borderRadius: 8 },
  textContainer: { flex: 1, marginLeft: 10 },
  productTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  productDescription: { fontSize: 14, color: '#777', marginVertical: 4 },
  removeButton: {
    marginTop: 5,
    backgroundColor: '#FF3B30',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeButtonText: { color: '#fff', fontWeight: 'bold' },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
    marginTop: 20,
  },
});

export default WishlistScreen;
