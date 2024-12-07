import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collectionsData } from '../../utils/index';
import { useTheme } from '../../utils/ThemeContext';

const categories = ["All", "Red Chilli", "Coffee", "Rice", "Turmeric"];

export default function Home() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { isWhiteMode } = useTheme();

  const filteredData = collectionsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || item.title === selectedCategory)
  );

  const renderCollectionItem = ({ item }: any) => (
    <TouchableOpacity
      style={[styles.productCard, isWhiteMode && styles.productCardDark]}
      onPress={() => navigation.navigate('ProductInfo', { product: item })}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={[styles.productTitle, isWhiteMode && styles.productTitleDark]}>{item.title}</Text>
      <Text style={[styles.productSubtitle, isWhiteMode && styles.productSubtitleDark]}>{item.subtitle}</Text>
      <View style={styles.cardFooter}>
        <Text style={[styles.rating, isWhiteMode && styles.ratingDark]}>⭐ {item.rating}</Text>
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
        <Text style={[styles.greeting, isWhiteMode && styles.greetingDark]}>Hi Shiva 👋</Text>
        <Text style={[styles.subGreeting, isWhiteMode && styles.subGreetingDark]}>
          Discover products that suit your needs
        </Text>
      </View>

      <View style={styles.searchAndFilterContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={[styles.searchInput, isWhiteMode && styles.searchInputDark]}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity style={[styles.filterButton, isWhiteMode && styles.filterButtonDark]}>
          <Image
            source={require('../../assets/images/pageicons/settings-sliders.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
              isWhiteMode && styles.categoryButtonDark,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
                isWhiteMode && styles.categoryTextDark,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredData}
        renderItem={renderCollectionItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  containerDark: { backgroundColor: '#FFF' },
  header: { marginTop: 20, marginBottom: 16 },
  greeting: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  greetingDark: { color: '#333' },
  subGreeting: { fontSize: 14, color: 'white', marginTop: 4 },
  subGreetingDark: { color: '#555' },
  searchAndFilterContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  searchInput: { flex: 1, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 10, height: 40, fontSize: 16, color: '#333' },
  searchInputDark: { backgroundColor: '#ddd', color: '#555' },
  filterButton: { width: 40, height: 40, backgroundColor: '#FF3B30', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginLeft: 10 },
  filterButtonDark: { backgroundColor: '#bbb' },
  filterIcon: { width: 20, height: 20, tintColor: 'white' },
  categoryContainer: { flexDirection: 'row', marginVertical: 10 },
  categoryButton: { 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#f0f0f0', 
    marginRight: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  selectedCategoryButton: { backgroundColor: '#FF3B30' },
  categoryButtonDark: { backgroundColor: '#e0e0e0' },
  categoryText: { fontSize: 14, color: '#333' },
  selectedCategoryText: { color: '#fff' },
  categoryTextDark: { color: '#555' },
  productList: { paddingBottom: 20 },
  productCard: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  productCardDark: { backgroundColor: '#f9f9f9' },
  productImage: { width: 100, height: 100, resizeMode: 'contain', marginVertical: 8 },
  productTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  productTitleDark: { color: '#333' },
  productSubtitle: { fontSize: 14, color: '#777', textAlign: 'center', marginBottom: 8 },
  productSubtitleDark: { color: '#888' },
  cardFooter: { flexDirection: 'row', justifyContent: 'center', width: '100%' },
  rating: { fontSize: 14, color: '#333' },
  ratingDark: { color: '#333' },
});
