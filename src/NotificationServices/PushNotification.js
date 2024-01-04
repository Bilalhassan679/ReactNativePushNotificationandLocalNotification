import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('Token ', token);
      },
      onNotification: function (notification) {
        PushNotification.localNotification({
          channelId: 'channel-id', // (required)
          channelName: 'My channel', // (required)
          autoCancel: true,
          bigText:
            'this is local notification demo for react native , it will show then expanded',
          channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
          subText: 'Local Notification Demo',
          title: notification?.title,
          message: notification?.message,
          playSound: true, // (optional) default: true
          soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
          // importance: 10, // (optional) default: Importance.HIGH. Int value of the Android notification importance
          vibrate: true,
          vibration: 1000, //
        });

        console.log('Remote Controller =>', notification);
      },
      senderID: '258754598416',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  return null;
};

export default RemotePushController;
