import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3hCkafQA-mcYzFO6b0oeLfVzDHYHKa_E",
  authDomain: "facebook-clone-da7da.firebaseapp.com",
  databaseURL: "https://facebook-clone-da7da.firebaseio.com",
  projectId: "facebook-clone-da7da",
  storageBucket: "facebook-clone-da7da.appspot.com",
  messagingSenderId: "1086411231767",
  appId: "1:1086411231767:web:a4429b46b256c256278252",
  measurementId: "G-ZR520R9B93",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
