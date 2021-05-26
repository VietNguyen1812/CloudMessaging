importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }

// firebase.initializeApp({
//   messagingSenderId: "954449346404"
//   })
firebase.initializeApp({
  apiKey: "AIzaSyCfLkAOiaUDzPqyAIzfV2KsU-iw3v6zhBs",
  authDomain: "messagingcloud-3dbd0.firebaseapp.com",
  projectId: "messagingcloud-3dbd0",
  storageBucket: "messagingcloud-3dbd0.appspot.com",
  messagingSenderId: "954449346404",
  appId: "1:954449346404:web:b7bbf3032ebe5c99034471",
  measurementId: "G-VRSEG758K1"})
  const messaging = firebase.messaging();
  console.log('messaging', messaging)
  messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
      icon: '/firebase-logo.png'
    };
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  
  self.addEventListener('notificationclick', event => {
    console.log(event)
    return event;
  });
