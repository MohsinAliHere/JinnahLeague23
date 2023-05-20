import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";
import RouterApp from "./config/RouterApp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onChildAdded, onValue, ref } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAdminLogin,
  checkUserLogin,
  setHotelList,
  setProfileData,
  setStatus,
} from "./redux/slices/HotelSlice";
import { auth, db } from "./db/firebase";
import { Stack } from "@mui/material";
import loader from "./assets/loadingimg.gif";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { status, profileData } = useSelector((selector) => selector.hotel);

  const getData = (uid) => {
    let Ref = ref(db, `users/${uid}`);
    onValue(Ref, (snapshot) => {
      if (snapshot.exists()) {
        dispatch(setProfileData(snapshot.val()))
      }
      if (snapshot.val()?.role == "admin") {
        dispatch(checkAdminLogin(true));
      } else {
        dispatch(checkUserLogin(true));
      }
    });
    dispatch(setStatus("SUCCEEDED"));
  };

  // for user Auth check
  useEffect(() => {
    if (status == "IDLE") {
      dispatch(setStatus("LOADING"));
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getData(user.uid);
        } else {
          dispatch(setStatus("SUCCEEDED"));
        }
      });
    }
  }, [status]);

  if (status === "LOADING") {
    return (
      <>
        <Stack className="centeDiv">
          <Stack>
            <img src={loader} alt="" />
          </Stack>
        </Stack>
      </>
    );
  }

  if (status === "SUCCEEDED") {
    return <RouterApp />;
  }
};

export default App;
