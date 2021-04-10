import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBNwOgRlAdxAYc-T7X00AeO-iuC1BFVzwU",
  authDomain: "cuprija-226e5.firebaseapp.com",
  projectId: "cuprija-226e5",
  storageBucket: "cuprija-226e5.appspot.com",
  messagingSenderId: "446509600884",
  appId: "1:446509600884:web:c735d9ccbc77aebf8e0121"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export {auth, firestore}
