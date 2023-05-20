import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Divider,
  Rating,
} from "@mui/material";
import "./HotelDetail.css";
import { useSelector } from "react-redux";
import { BsDashLg } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import { errorNotify } from "../../../components/Toast/Toastify";
import { sendData } from "../../../db/firebaseMethod";
const HotelDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [Show, setShow] = useState(false);

  const {
    restaurantCategory,
    restaurantContact,
    restaurantDescription,
    restaurantName,
    restaurantServices,
    restaurantZipCode,
    restaurantImg
  } = location.state;
  const { ContactNumber, Name, Email } = useSelector(
    (state) => state.hotel.profileData
  );

  const [Booking, setBooking] = useState({});
  const [star, setStar] = React.useState(0);

  const getData = (e) => {
    const { id, value } = e.target;
    setBooking({
      ...Booking,
      [id]: value,
    });
  };

  const submit = () => {
    if (false) {
      setShow(true);
      errorNotify("All fields are required");
    } else {
      const ReviewData = {
        Name,
        Email,
        ContactNumber,
        Booking,
        star,
        restaurantCategory,
        restaurantContact,
        restaurantDescription,
        restaurantName,
        restaurantServices,
        restaurantZipCode,
        restaurantImg
      };
      sendData(ReviewData, "UserReview");
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Grid
          className="my-3"
          padding={1}
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="space-between"
          alignContent="center"
          wrap="wrap"
        >
          <Grid
            className="animate__animated animate__backInLeft"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Stack>
              <Stack marginY={3} direction="column" spacing={2}>
                <Stack>
                  <Typography variant="h5" className="customFont fw-bold ">
                    Restaurant Details
                  </Typography>
                  <BsDashLg size={30} />
                </Stack>
                <Stack>
                  <Typography variant="h3" className="customFont">
                    {restaurantName}
                  </Typography>
                </Stack>
                <Stack className="w-75">
                  <Typography variant="body1" className="customFont fw-bold ">
                    {restaurantDescription}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography variant="h5" className="customFont">
                    {restaurantContact}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            className="animate__animated animate__backInRight"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Stack className="mt-4">
              <Typography variant="h5" className="customFont fw-bold ">
                Review Form
              </Typography>
              <BsDashLg size={30} />
            </Stack>
            {Show && (
              <Stack>
                <Typography variant="h6" color="red" className="customFont">
                  All Fields are required*
                </Typography>
              </Stack>
            )}
            <Stack direction="column" spacing={1}>
              <Stack>
                <Typography variant="body1">Stars</Typography>
                <Rating
                  name="simple-controlled"
                  size="large"
                  value={star}
                  onChange={(event, newValue) => {
                    setStar(newValue);
                  }}
                />
              </Stack>
              <Stack>
                <Typography variant="body1">Comments</Typography>
                <textarea
                  id="Comments"
                  className="Custominp"
                  required
                  rows={5}
                  onChange={(e) => getData(e)}
                />
              </Stack>

              <Button
                onClick={submit}
                className="customBtn my-3 w-50"
                variant="contained"
              >
                Post Review
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer />
    </>
  );
};

export default HotelDetail;
