import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  localNotifeeNotification,
  localNotification,
} from './src/NotificationServices/LocatNotification';
import RemotePushController from './src/NotificationServices/PushNotification';
import {PermissionsAndroid} from 'react-native';
import notifee, {AuthorizationStatus} from '@notifee/react-native';
const App = () => {
  useEffect(() => {
    async function requestUserPermission() {
      const settings = await notifee.requestPermission();

      if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
        console.log('Permission settings:', settings);
      } else {
        console.log('User declined permissions');
      }
    }
    requestUserPermission();
  }, []);
  const handleButtonPress = () => {
    console.log('helloworld');
    localNotification();
  };
  return (
    <View style={styles.container}>
      <Text>Press a button to trigger the Notification</Text>
      <View style={{marginTop: '5%'}}>
        <Button
          title="Local Push Notification"
          onPress={() => {
            handleButtonPress();
          }}
        />
        <Button
          title="Notifeee Local Push Notification"
          onPress={() => {
            localNotifeeNotification();
          }}
        />
      </View>
      <RemotePushController />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
