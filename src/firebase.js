import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCT0OSIW-P1B9J_6Pq36U2W3HAZGeTKqmI",
  authDomain: "instagram-clone-c29c3.firebaseapp.com",
  projectId: "instagram-clone-c29c3",
  storageBucket: "instagram-clone-c29c3.appspot.com",
  messagingSenderId: "855356933211",
  appId: "1:855356933211:web:422881a760872166d42b7e"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db, auth, storage};