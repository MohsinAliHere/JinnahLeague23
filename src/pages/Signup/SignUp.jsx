import React, { useState } from "react";
import "./SignUp.css";
import {
  Paper,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { auth, createUserWithEmailAndPassword } from "../../db/firebase";
import { Link, useNavigate } from "react-router-dom";
import { sendData } from "../../db/firebaseMethod";
import { ToastContainer } from "react-toastify";
import { errorNotify, successNotify } from "../../components/Toast/Toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [Form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
    ContactNumber: "",
  });
  const [Loader, setLoader] = useState(false);

  const getInpValues = (e) => {
    const { id, value } = e.target;
    setForm({
      ...Form,
      [id]: value,
      role: "user",
    });
  };

  const submit = () => {
    createUserWithEmailAndPassword(auth, Form.Email, Form.Password)
      .then((userCredential) => {
        setLoader(true);
        sendData(Form, "users", userCredential.user.uid);
        successNotify(`${Form.Name} is signed up successfully`);
        navigate("/");
      })
      .catch((error) => {
        setLoader(false);
        errorNotify(error.message);

      });
  };

  return (
    <>
      <Stack
        className="centeDiv "
        direction="row"
        justifyContent="center"
      >
        <Box
          sx={{
            width: 400,
            height: 450,
            backgroundColor: "white",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            margin: "15px 0",
          }}
        >
          <Stack padding={3} direction="column" spacing={2}>
            <Stack direction="row" justifyContent="center">
              <Link to="/" className="text-black">
                <Typography variant="h4" className="logoTxt">
                FlavorFusion.
                </Typography>
              </Link>
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="Name"
                placeholder="Name"
                value={Form.Name}
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="ContactNumber"
                placeholder="ContactNumber"
                value={Form.ContactNumber}
                onChange={(e) => getInpValues(e)}
              />
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
                {Loader ? "Please Wait" : "SignUp"}
              </Button>
            </Stack>
            <Stack className="my-2" direction="row" justifyContent="center" alignItems="center">
              <Typography variant="body1">
                Already have a account
                <Link to="/login"> click here </Link>
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <ToastContainer limit={1} />
    </>
  );
};

export default SignUp;
