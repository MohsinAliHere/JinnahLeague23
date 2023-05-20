import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./CheckOut.css";
import { Stack, Grid, Typography, Container, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { sendData } from "../../../db/firebaseMethod";
import { auth, db } from "../../../db/firebase";
import { child, push, ref, set } from "firebase/database";
import { successNotify } from "../../../components/Toast/Toastify"
const CheckOut = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { DateAndTime, noOfPerson, noOfRooms, HotelPrice } = location.state;


  const PayNow = () => {
    const newPostKey = push(child(ref(db), "posts")).key;
    location.state.id = newPostKey;
    const currentUser = auth.currentUser.uid;
    set(ref(db, `BookingList/${currentUser}/${newPostKey}`), {
      ...location.state,
    }).then((data) => {
      successNotify("Booking successfully");
      navigate("/Booking");
    });
  }

  return (
    <>
      <Navbar />
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          alignContent="center"
          wrap="wrap"
        >
          <Grid className="animate__animated animate__bounceInDown BookingDetailBox p-3" xs={12} sm={12} md={7} lg={7}>
            <Stack className="mb-3 " >
              <Typography variant="h5" className="customFont fw-bold txtColor"  >Booking Details</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Typography variant="h6">Booking Date and Time </Typography>
              <Typography variant="h6">{DateAndTime}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">No of Rooms </Typography>
              <Typography variant="h6">{noOfRooms} </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">No of Days </Typography>
              <Typography variant="h6">{noOfPerson}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">No of Person </Typography>
              <Typography variant="h6">{noOfPerson} </Typography>
            </Stack>
          </Grid>
          <Grid className="BookingDetailBox animate__animated animate__bounceInDown p-3" xs={12} sm={12} md={4} lg={4}>
          <Stack className="mb-3 " >
              <Typography variant="h5" className="customFont fw-bold txtColor"  >Invoice Details</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Typography variant="h6">Charge</Typography>
              <Typography variant="h6" className="fw-light" >300</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Discount</Typography>
              <Typography variant="h6" className="fw-light" >-8%</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Vat</Typography>
              <Typography variant="h6" className="fw-light" >(+13%) $20.08 </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" className="fw-light" >{HotelPrice}</Typography>
            </Stack>
            <Stack className="mt-3">
              <Button
              onClick={PayNow}
                className="w-100 customBtn"
                variant="contained"
                color="primary"
              >
                Pay Now
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckOut;
