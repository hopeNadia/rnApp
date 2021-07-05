import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';

import ChatBot from '../chatBot';
import routes from '../routes';
import {User} from '../user';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({navigation}) => {
  const logout = async () => {
    try {
      await auth().signOut();

      navigation.reset({
        index: 0,
        routes: [{name: routes.home}],
      });
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: 'Content',
          style: {color: 'white', fontSize: 20},
        }}
        leftComponent={() => (
          <Icon
            name="logout"
            type="material-community"
            color="white"
            onPress={logout}
          />
        )}
      />
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen
          name={routes.userProfile}
          component={User}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name="account"
                type="material-community"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name={routes.chatBot}
          component={ChatBot}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name="robot"
                type="material-community"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BottomTabNavigation;
