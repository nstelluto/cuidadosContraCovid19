import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import { StyleSheet, SafeAreaView, Text, View, Button, Platform } from 'react-native';
import axios from 'axios';


const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Header style="auto" />
      <Menu style="auto" />
    </SafeAreaView>
  );
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function NewApp() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [ativo, setAtivo] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    async function Notificacao() {
      await axios.get('https://apiappcovid.000webhostapp.com/configuration?login_key=1644666', {
      })
        .then(function (response) {
          setAtivo(response.data.notification)
          let ativos = response.data.notification;
          console.log(ativos);
          if (ativos == 1) {
            sendPushNotification(expoPushToken);
            console.log(ativos);
          }

        })
        .catch(error => {

        });
    }
    setTimeout(() => {
      Notificacao();
    }, 1000);

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {

    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <App />
  );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
async function sendPushNotification(expoPushToken) {
  console.log(expoPushToken);
  const message = {
    to: expoPushToken,
    sound: 'default',
    vibrate: true,
    title: 'Trocar a máscara',
    body: 'Já faz 2 horas que você trocou a máscara!',
    data: { data: 'Clique aqui!' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;

  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'Cuidados contra o Covid-19',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}


const styles = StyleSheet.create({
  app: {
    height: "100%"
  },

})