import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAt6aNjmGDu5ufKkLVct0f4i1uvzbCNxfo",
    authDomain: "challenge-7404e.firebaseapp.com",
    projectId: "challenge-7404e",
    storageBucket: "challenge-7404e.appspot.com",
    messagingSenderId: "197124787605",
    appId: "1:197124787605:web:364c5953b546ae37f97a9c",
    measurementId: "G-68SDYE5KFL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };