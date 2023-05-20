import {
  ref,
  set,
  child,
  remove,
  onChildAdded,
  push,
  onValue,
} from "firebase/database";
import { db } from "./firebase";
import { redirect, useNavigate } from "react-router-dom";
import { checkAdminLogin, checkUserLogin } from "../redux/slices/HotelSlice";

// send Data to push in data in firebase real time database
const sendData = (obj, nodeName, id) => {
  const newPostKey = push(child(ref(db), "posts")).key;
  obj.id = newPostKey;
  set(ref(db, `${nodeName}/${id ? id : newPostKey}`), obj);
};

const delSingleData = (nodeName, userId, BookingId) => {
};

const delAllData = (nodeName) => {
  remove(ref(db, `${nodeName}/`));
};

export { sendData, delSingleData, delAllData };
