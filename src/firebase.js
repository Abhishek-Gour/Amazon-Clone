/* This is a JavaScript code that sets up a connection to the Firebase platform using the Firebase SDK.
It imports the necessary Firebase modules for authentication and Firestore database, and initializes
the Firebase app with the provided configuration object. It also exports the initialized Firestore
database and authentication modules for use in other parts of the application. The comment at the
beginning indicates that the `measurementId` property in the configuration object is optional for
Firebase SDK version 7.20.0 and later. */
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