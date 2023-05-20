import React from "react";
import HotelCard from "../HotelCard/HotelCard";
import { Container, Grid, Typography, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { errorNotify, successNotify } from "../Toast/Toastify";
import { ToastContainer } from "react-toastify";
const AllHotels = ({ Hotel }) => {
  const navigate = useNavigate();

  const isUserLogin = useSelector((state) => state.hotel.isUserLogin);

  const goBookingPage = (e) => {
    if (isUserLogin) {
      navigate("/HotelDetail", { state: e });
    } else {
      errorNotify("Please Login First !");
    }
  };

  return (
    <>


    
      <Container className="animate__animated animate__zoomInDown animate__slower">
        <Stack  marginY={3} >
          <Stack  direction="row" justifyContent="center" >
            <Typography variant="h4"  className="customFont"  >Find a business to review</Typography>
          </Stack>
        </Stack>
        <Grid
          className="mt-2"
          container
          spacing={1}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          {Hotel.map((x, i) => {
            return (
              <Stack onClick={() => goBookingPage(x)}>
                <HotelCard {...x} />
              </Stack>
            );
          })}
        </Grid>
      </Container>
      <ToastContainer />
    </>
  );
};

export default AllHotels;
