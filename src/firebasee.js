// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFQnyJCDlVr5cRrtsVVs_1YxdH1e6qWM0",
    authDomain: "clone-3d3a8.firebaseapp.com",
    projectId: "clone-3d3a8",
    storageBucket: "clone-3d3a8.appspot.com",
    messagingSenderId: "55532399556",
    appId: "1:55532399556:web:1332b3e453580908d3d291",
    measurementId: "G-9CZFR2LZ0E"
  };

  const firebaseApp = firebase.initializeApp( firebaseConfig );
  const db = firebaseApp.firestore();
  const auth  = firebase.auth() 
  export {db,auth};