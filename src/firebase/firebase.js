import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDfwVYOAQwrtjbHkyP2e-gzzfBU_XooQNA",
    authDomain: "social-verse-1a876.firebaseapp.com",
    projectId: "social-verse-1a876",
    storageBucket: "social-verse-1a876.appspot.com",
    messagingSenderId: "848864381461",
    appId: "1:848864381461:web:dd16f71a3ce61dd0479c1c",
    measurementId: "G-RJZ0ZMFTLH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestoreDb = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { app, auth, firestoreDb, storage };