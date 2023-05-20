import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Stack, Typography, Container } from "@mui/material";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { onChildAdded, ref } from "firebase/database";
import loadingImg from "../../../assets/loadingimg.gif";
import { auth, db } from "../../../db/firebase";
import { useState } from "react";
import { useEffect } from "react";
const Booking = () => {
  const [Booking, setBooking] = useState([]);
  const [Loader, setLoader] = useState(true);

  const getData = () => {
    let arr = [];
    const currentUser = auth.currentUser.uid;
    let Ref = ref(db, `UserReview/${currentUser}`);
    setLoader(true);
    onChildAdded(Ref, (snapshot) => {
      if (snapshot.exists()) {
        arr.push(snapshot.val());
      }
      setBooking(arr);
      setLoader(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Stack marginY={2}>
          <Stack>
            <Typography variant="h4" className="customFont">
              Review
            </Typography>
          </Stack>
        </Stack>
        {Booking === [] || Loader ? (
          <Stack className="centeDiv">
            <h6>No Review yet..</h6>
          </Stack>
        ) : (
          <CustomTable Booking={Booking} />
        )}
      </Container>
    </>
  );
};

export default Booking;
