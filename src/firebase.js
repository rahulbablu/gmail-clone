import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTAvSHZMhJS0nVS6m3376foRSQHh2FTus",
  authDomain: "clone-8f8ef.firebaseapp.com",
  projectId: "clone-8f8ef",
  storageBucket: "clone-8f8ef.appspot.com",
  messagingSenderId: "194371211581",
  appId: "1:194371211581:web:a218c384c790a37d15b554"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
