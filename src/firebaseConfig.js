// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD20w2fbxjcr_S6kQQ4F4mwpINr5Ebi4-c",
  authDomain: "blitzlocal-20da8.firebaseapp.com",
  projectId: "blitzlocal-20da8",
  storageBucket: "blitzlocal-20da8.appspot.com",
  messagingSenderId: "287485611416",
  appId: "1:287485611416:web:bf9c97005ace03cbc7afed",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
