import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import WishListScreen from '../screens/WishList/WishListScreen';
import CommentScreen from '../screens/Comment/CommentScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductInfo from '../screens/ProductInfo';

// Custom icons for each tab
const platforms = [
  { name: 'Home', image: require('../assets/images/tabicons/home.png') },
  { name: 'Profile', image: require('../assets/images/tabicons/user.png') },
  { name: 'Comments', image: require('../assets/images/tabicons/comment.png') },
  { name: 'Wishs', image: require('../assets/images/tabicons/heart.png') },
];

// Create Stack Navigator for each tab screen
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTab" component={Home} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
    </Stack.Navigator>
  );
}

function WishListStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WishListScreen" component={WishListScreen} />
    </Stack.Navigator>
  );
}

function CommentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CommentScreen" component={CommentScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

// Tab Navigator
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const platform = platforms.find((p) => p.name === route.name);
          if (platform) {
            return (
              <Image
                source={platform.image}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? '#FF6347' : '#B0B0B0', // Set different colors for focused and unfocused
                }}
              />
            );
          }
          return null;
        },
        tabBarActiveTintColor: '#FF6347', // Set active label color to match the focused icon color
        tabBarInactiveTintColor: '#B0B0B0', // Set inactive label color to match the unfocused icon color
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#1c1c1c', // Matte black background
          paddingBottom: 7,
          height: 58,
          borderTopWidth: 0, // Optional: Hide border
          marginHorizontal: 20, // Add horizontal margin for side spacing
          borderRadius: 20, // Make the corners rounded
          position: 'absolute', // Lift the tab bar slightly off the bottom
          bottom: 10, // Space from the bottom
        },
        headerShown: false, // Hide the default header in BottomTabNavigator
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Comments" component={CommentStack} />
      <Tab.Screen name="Wishs" component={WishListStack} />
    </Tab.Navigator>
  );
}
