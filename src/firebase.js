// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA1H4AcZnxio5l0WFCqTBe99Ye50ZAubnk",
  authDomain: "facebook-clone-ef951.firebaseapp.com",
  projectId: "facebook-clone-ef951",
  storageBucket: "facebook-clone-ef951.appspot.com",
  messagingSenderId: "736257974153",
  appId: "1:736257974153:web:d590eb20fb27ac521c0b58",
  measurementId: "G-5M7BWD0VEH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
