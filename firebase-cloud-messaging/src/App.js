import React, { Component } from "react";
// import {initMessaging} from './firebase-messaging-sw'
import firebase from 'firebase/app'
import 'firebase/messaging'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
firebase.initializeApp({
  apiKey: "AIzaSyCfLkAOiaUDzPqyAIzfV2KsU-iw3v6zhBs",
  authDomain: "messagingcloud-3dbd0.firebaseapp.com",
  projectId: "messagingcloud-3dbd0",
  storageBucket: "messagingcloud-3dbd0.appspot.com",
  messagingSenderId: "954449346404",
  appId: "1:954449346404:web:b7bbf3032ebe5c99034471",
  measurementId: "G-VRSEG758K1"
})

 const messaging = firebase.messaging()
 messaging.getToken({vapidKey:"BFS_RZNL-x-WbosElUFr9cW2RMmjP3cc1zhhmwG_raAofMAnm7URh2WlnQNc71U35PIi3bsT4cuELqSfAJC5z6w"}).then(token => {
   console.log('token', token);
 })
 messaging.onMessage(payload => {
   console.log("received message", payload)
 })
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // const messaging = firebase.messaging();
    // Notification.requestPermission()
    //   .then(() => {
    //     return initMessaging.getToken({vapidKey:"BFS_RZNL-x-WbosElUFr9cW2RMmjP3cc1zhhmwG_raAofMAnm7URh2WlnQNc71U35PIi3bsT4cuELqSfAJC5z6w"});
    //   })
    //   .then((token) => {
    //     console.log("Token : ", token);
        
    // initMessaging.onMessage((payload) => {
    //   console.log("received message ",payload);
    // });
    //   })
    //   .catch((err) => {
    //     console.log("get token error",err);
    //   });
  }
  render() {
    return <div></div>;
  }
}

export default App;
