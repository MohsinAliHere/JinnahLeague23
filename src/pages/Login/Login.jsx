import React, { useState } from "react";
import "./Login.css";
import {
  Paper,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../db/firebase";
import { onValue, ref } from "firebase/database";
import { checkAdminLogin, checkUserLogin } from "../../redux/slices/HotelSlice";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { errorNotify, successNotify } from "../../components/Toast/Toastify";
import { setLoading } from "../../redux/slices/HotelSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [Form, setForm] = useState({
    Email: "",
    Password: "",
  });

  const getInpValues = (e) => {
    const { id, value } = e.target;
    setForm({
      ...Form,
      [id]: value,
    });
  };
  const [Loader, setLoader] = useState(false)

  const submit = () => {
    setLoader(true)
    signInWithEmailAndPassword(auth, Form.Email, Form.Password)
      .then((userCredential) => {
        dispatch(checkUserLogin(true));
        let Ref = ref(db, `users/${auth.currentUser.uid}`);
        onValue(Ref, (snapshot) => {
          setLoader(true)
          if (snapshot.val()?.role == "admin") {
            dispatch(checkAdminLogin(true));
            navigate("/Dashboard");
          } else {
            dispatch(checkAdminLogin(false));
            navigate("/");
          }
        });
          setLoader(false)
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorNotify(errorMessage);
        setLoader(false)
      });
  };

  return (
    <>
      <Stack className="centeDiv" direction="row" justifyContent="center">
        <Box
          sx={{
            width: 400,
            height: 320,
            backgroundColor: "white",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            margin: "15px 0",
          }}
        >
          <Stack padding={3} direction="column" spacing={2}>
            <Stack direction="row" justifyContent="center">
              <Link to="/" className="text-black">
                <Typography variant="h4" className="logoTxt">
                  Hotel Hive
                </Typography>
              </Link>
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="Email"
                placeholder="Email"
                value={Form.Email}
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="Password"
                placeholder="Password"
                value={Form.Password}
                type="password"
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <Button
                className="customBtn"
                onClick={submit}
                variant="contained"
              >
               {Loader ? "Please wait ..." : "Login"}
              </Button>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography variant="body1">
                dont have a account
                <Link to="/Create-Account"> click here </Link>
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <ToastContainer  />
    </>
  );
};

export default Login;
