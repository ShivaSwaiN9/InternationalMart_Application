import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../utils/ThemeContext'; // Import useTheme hook

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {isWhiteMode, toggleTheme} = useTheme(); // Destructure theme context values

  return (
    <ImageBackground
      source={isWhiteMode ? null : require('../../assets/images/bg1.jpg')}
      style={[styles.container, isWhiteMode && styles.containerDark]}
      resizeMode="cover">
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/pageicons/arrow.png')}
            style={[styles.icon, isWhiteMode && styles.iconDark]}
          />
        </TouchableOpacity>

        <Switch value={isWhiteMode} onValueChange={toggleTheme} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Profile Picture */}
        <View style={styles.profilePicContainer}>
          <Image
            source={require('../../assets/images/profile-pic.png')}
            style={styles.profilePic}
          />
        </View>

        {/* Profile Info Fields */}
        <View style={styles.infoContainer}>
          <Text style={[styles.label, isWhiteMode && styles.labelDark]}>
            Name
          </Text>
          <TextInput
            style={[styles.input, isWhiteMode && styles.inputDark]}
            value="Sophia Patel"
            editable={false}
          />

          <Text style={[styles.label, isWhiteMode && styles.labelDark]}>
            Email
          </Text>
          <TextInput
            style={[styles.input, isWhiteMode && styles.inputDark]}
            value="sophiapatel@gmail.com"
            editable={false}
          />

          <Text style={[styles.label, isWhiteMode && styles.labelDark]}>
            Delivery Address
          </Text>
          <TextInput
            style={[styles.input, isWhiteMode && styles.inputDark]}
            value="123 Main St Apartment 4A, New York, NY"
            editable={false}
          />

          <Text style={[styles.label, isWhiteMode && styles.labelDark]}>
            Password
          </Text>
          <TextInput
            style={[styles.input, isWhiteMode && styles.inputDark]}
            value="********"
            secureTextEntry
            editable={false}
          />
        </View>

        {/* Additional Options */}
        <TouchableOpacity
          style={[styles.optionButton, isWhiteMode && styles.optionButtonDark]}>
          <Text
            style={[styles.optionText, isWhiteMode && styles.optionTextDark]}>
            Payment Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, isWhiteMode && styles.optionButtonDark]}>
          <Text
            style={[styles.optionText, isWhiteMode && styles.optionTextDark]}>
            Order History
          </Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.editProfileButton,
              isWhiteMode && styles.editProfileButtonDark,
            ]}>
            <Text
              style={[
                styles.editProfileText,
                isWhiteMode && styles.editProfileTextDark,
              ]}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.logoutButton,
              isWhiteMode && styles.logoutButtonDark,
            ]}>
            <Text
              style={[styles.logoutText, isWhiteMode && styles.logoutTextDark]}
              onPress={() => navigation.navigate('LoginScreen')}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  containerDark: {backgroundColor: '#FFF'},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  icon: {width: 20, height: 20, tintColor: '#FFFFFF'},
  iconDark: {tintColor: '#333'},
  contentContainer: {paddingHorizontal: 16, alignItems: 'center'},
  profilePicContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFCDD2',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {width: '100%', height: '100%', resizeMode: 'cover'},
  infoContainer: {width: '100%', marginBottom: 20},
  label: {fontSize: 14, color: '#FFFFFF', marginBottom: 4, marginLeft: 8},
  labelDark: {color: '#333'},
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  inputDark: {backgroundColor: '#ddd', color: '#333'},
  optionButton: {
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF33',
    alignItems: 'flex-start',
    paddingLeft: 12,
  },
  optionButtonDark: {borderBottomColor: '#e0e0e0'},
  optionText: {fontSize: 16, color: '#FFFFFF'},
  optionTextDark: {color: '#333'},
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  editProfileButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  editProfileButtonDark: {backgroundColor: '#ddd'},
  editProfileText: {color: '#FFFFFF', fontSize: 16},
  editProfileTextDark: {color: '#333'},
  logoutButton: {
    backgroundColor: '#FFCDD2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonDark: {backgroundColor: '#bbb'},
  logoutText: {color: '#FFFFFF', fontSize: 16},
  logoutTextDark: {color: '#333'},
});

export default ProfileScreen;
