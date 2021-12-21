// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtN7IUMP-B63HAQrG2botJMvPYgj1v2EM",
  authDomain: "whatsapp-14522.firebaseapp.com",
  projectId: "whatsapp-14522",
  storageBucket: "whatsapp-14522.appspot.com",
  messagingSenderId: "60691567567",
  appId: "1:60691567567:web:44a5cdf68c36a9beaeb8ba",
  measurementId: "G-YL3BK5RJ0E"
};

// Initialize Firebase
const fireBaseApp = firebase.initializeApp(firebaseConfig);

const db = fireBaseApp.firestore();
const auth = fireBaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref('images');
const audioStorage = firebase.storage().ref('audios');
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp.TIMESTAMP;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  serverTimestamp
}