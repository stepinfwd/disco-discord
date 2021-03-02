import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC9jaRtJ7QwGPX6H8AmzluwgarYiH015Jc",
  authDomain: "discord-e20fa.firebaseapp.com",
  databaseURL: "https://discord-e20fa.firebaseio.com",
  projectId: "discord-e20fa",
  storageBucket: "discord-e20fa.appspot.com",
  messagingSenderId: "607220569876",
  appId: "1:607220569876:web:0f8d135c89cb119ddf5401",
  measurementId: "G-FS2NXF2702",
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
firebase.analytics();
export { auth, provider };
export default db;
