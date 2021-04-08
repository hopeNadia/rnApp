import React from 'react';
import auth from '@react-native-firebase/auth';
import routes from '../routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {User} from '../user';
import {StyleSheet, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';

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
      <Tab.Navigator>
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
