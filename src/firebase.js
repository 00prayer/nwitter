import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnzhlsPOm8EiYSgo1DT-ixJOoWU_CKofo",
    authDomain: "nwitter-97b33.firebaseapp.com",
    projectId: "nwitter-97b33",
    storageBucket: "nwitter-97b33.appspot.com",
    messagingSenderId: "75966764350",
    appId: "1:75966764350:web:a60e4ded6e4de3a3c5486f"
  };

  export default firebase.initializeApp(firebaseConfig);
  export const authService = firebase.auth();