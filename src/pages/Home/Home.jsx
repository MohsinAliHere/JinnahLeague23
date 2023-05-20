import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Feautures/Features";
import Footer from "../../components/Footer/Footer";
import AllHotels from "../../components/AllHotelCard/AllHotels";
import { onChildAdded, onValue, ref } from "firebase/database";
import { db } from "../../db/firebase";
import { setHotelList, setStatus } from "../../redux/slices/HotelSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Loader from "../../assets/loadingimg.gif";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const [Hotel, setHotel] = useState([]);
  const [Loading, setLoading] = useState(true);

  const getHotelList = () => {
    let Hotels = [];
    let Ref = ref(db, "UserReview");
    setLoading(true);
    onChildAdded(Ref, (snapshot) => {
      if (snapshot.exists()) {
        Hotels.push(snapshot.val());
      }
      console.log(Hotels);
      setHotel(Hotels);
      dispatch(setHotelList(Hotels));
      setLoading(false);
    });
  };

  useEffect(() => {
    getHotelList();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />

      <Container>
        {Loading ? (
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack className="my-5">
              <Typography variant="h4" align="center">
                No Review Available
              </Typography>
              <Link to="/WriteaReview">write Review Here</Link>
            </Stack>
          </Stack>
        ) : (
          <>
            <Stack direction="row" justifyContent="center" marginY={2}>
              <Typography variant="h4" align="center">
                Recent Activites
              </Typography>
            </Stack>

            <Grid container justifyContent="center">
              {Hotel.map((elem) => {
                return (
                  <Grid items sm={12} md={6} lg={4}>
                    <ReviewCard Hotel={elem} />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Container>

      <Features />

      <Footer />
    </>
  );
};

export default Home;
