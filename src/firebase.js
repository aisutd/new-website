import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import history from './history'

const firebaseConfig = {
    apiKey: "AIzaSyB2nhOb1NnXhM7V6DrwJIVa6KfAfLiiswM",
    authDomain: "ais-utd.firebaseapp.com",
    databaseURL: "https://ais-utd.firebaseio.com",
    projectId: "ais-utd",
    storageBucket: "ais-utd.appspot.com",
    messagingSenderId: "987444719343",
    appId: "1:987444719343:web:0c7ad2227415229085b51a",
    measurementId: "G-91MZZKZX8S"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};