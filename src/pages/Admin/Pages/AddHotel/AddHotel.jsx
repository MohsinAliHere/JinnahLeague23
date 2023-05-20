import React, { useState } from "react";
import {
  Paper,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../../../db/firebaseMethod";
import "./AddHotel.css";
import { successNotify } from "../../../../components/Toast/Toastify";
import { ToastContainer } from "react-toastify";
const AddHotel = () => {
  const navigate = useNavigate();
  const [Form, setForm] = useState({
    restaurantName: "",
    restaurantDescription: "",
    restaurantZipCode: "",
    restaurantImg: "",
    restaurantContact: "",
    restaurantServices: "",
    restaurantCategory: "",
  });

  const getInpValues = (e) => {
    const { id, value } = e.target;
    setForm({
      ...Form,
      [id]: value,
    });
  };

  const submit = () => {

    sendData(Form, "Restaurant");
    setForm({
      restaurantName: "",
      restaurantDescription: "",
      restaurantZipCode: "",
      restaurantImg: "",
      restaurantContact: "",
      restaurantServices: "",
      restaurantCategory: "",
    });
    successNotify("Hotel Added Successfully");
  };

  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Box
          sx={{
            width: 400,
            height: 630,
            backgroundColor: "white",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            margin: "15px 0",
          }}
        >
          <Stack padding={3} direction="column" spacing={2}>
            <Stack direction="row" justifyContent="center">
              <Typography variant="h4" className="logoTxt">
              FlavorFusion.
              </Typography>
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="restaurantName"
                placeholder="restaurantName"
                value={Form.restaurantName}
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="restaurantDescription"
                placeholder="restaurantDescription"
                value={Form.restaurantDescription}
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="restaurantZipCode"
                placeholder="restaurantZipCode"
                value={Form.restaurantZipCode}
                type="number"
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="restaurantImg"
                placeholder="Hotel Img Src"
                value={Form.restaurantImg}
                type="text"
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="restaurantContact"
                placeholder="restaurantContact"
                value={Form.restaurantContact}
                type="text"
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="restaurantServices"
                placeholder="restaurantServices"
                value={Form.restaurantServices}
                type="text"
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <TextField
                hiddenLabel
                id="restaurantCategory"
                placeholder="restaurantCategory"
                value={Form.restaurantCategory}
                type="text"
                onChange={(e) => getInpValues(e)}
              />
            </Stack>
            <Stack>
              <Button
                className="customBtn"
                onClick={submit}
                variant="contained"
              >
                Add Hotel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <ToastContainer />
    </>
  );
};

export default AddHotel;
