importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');


  const firebaseConfig = {
    apiKey: 'AIzaSyD_e6AFrzFLauJ_Zv1NMlF1xE0byIWe3ds',
    appId: '1:416792177745:web:3a66805cc6f4d5f7a61c70',
    messagingSenderId: '416792177745',
    projectId: 'vurall-app',
    authDomain: 'vurall-app.firebaseapp.com',
    storageBucket: 'vurall-app.firebasestorage.app',
    measurementId: 'G-7HJCTG2XK1',
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });