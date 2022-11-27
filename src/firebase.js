import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDhBDSDnSL1zWDGRRe-XIVz0iTotSyD6Xg",
    authDomain: "clone-f03ba.firebaseapp.com",
    projectId: "clone-f03ba",
    storageBucket: "clone-f03ba.appspot.com",
    messagingSenderId: "948449463026",
    appId: "1:948449463026:web:f8f7e2c294fdb8ffd11e6b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };