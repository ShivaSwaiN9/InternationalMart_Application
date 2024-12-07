import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/Splash/SplashScreen'; // Import the Splash screen
import LoginScreen from './src/screens/login/LoginScreen'; // Import the Login screen
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import TabNavigator from './src/components/TabNavigator';
import Home from './src/screens/Home/Home';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import WishListScreen from './src/screens/WishList/WishListScreen';
import CommentScreen from './src/screens/Comment/CommentScreen';
import ProductInfo from './src/screens/ProductInfo';
import CategoryScreen from './src/screens/CategoryScreen';
import {ThemeProvider} from './src/utils/ThemeContext';
import {FavoriteProvider} from './src/utils/FavoriteContext';

// Create the Stack Navigator
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen when the app loads
  }, []);

  return (
    <FavoriteProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="TabNavigator" component={TabNavigator} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
              <Stack.Screen name="WishListScreen" component={WishListScreen} />
              <Stack.Screen name="CommentScreen" component={CommentScreen} />
              <Stack.Screen name="ProductInfo" component={ProductInfo} />
              <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </FavoriteProvider>
  );
}

export default App;
