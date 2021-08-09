import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBcothXBTyq5GX8iq4Jo2q5FyP99BgTMTw",
    authDomain: "themoorningpost.firebaseapp.com",
    projectId: "themoorningpost",
    storageBucket: "themoorningpost.appspot.com",
    messagingSenderId: "39081411178",
    appId: "1:39081411178:web:8e0001919682f84303c013",
    measurementId: "G-SY6KRLTZ6J"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();