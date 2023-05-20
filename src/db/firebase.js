import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCiSo2i15AIXeSLo0ozk9xCkYXuHwqrrnM",
  authDomain: "hotel-hive.firebaseapp.com",
  databaseURL: "https://hotel-hive-default-rtdb.firebaseio.com",
  projectId: "hotel-hive",
  storageBucket: "hotel-hive.appspot.com",
  messagingSenderId: "364489315136",
  appId: "1:364489315136:web:573d1beef6fa03899ca0a5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)
export { auth,db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
