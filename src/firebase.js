// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCQyzFBtFRhWujiW4J6N4_UleX1f64NOT4",
    authDomain: "my-shop-ab31e.firebaseapp.com",
    projectId: "my-shop-ab31e",
    storageBucket: "my-shop-ab31e.appspot.com",
    messagingSenderId: "241899628084",
    appId: "1:241899628084:web:4d2de74bd389af50370c61",
    measurementId: "G-DL06T5K7Q5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };