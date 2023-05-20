import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import AllHotels from "../../components/AllHotelCard/AllHotels";
import { onChildAdded, onValue, ref } from "firebase/database";
import { db } from "../../db/firebase";
import { setHotelList, setStatus } from "../../redux/slices/HotelSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import Loader from "../../assets/loadingimg.gif"



const Review = () => {
  const dispatch = useDispatch();

  const [Hotel, setHotel] = useState([]);
  const [Loading, setLoading] = useState(true);

  const getHotelList = () => {
    let Hotels = [];
    let Ref = ref(db, "Restaurant");
    setLoading(true);
    onChildAdded(Ref, (snapshot) => {
      if (snapshot.exists()) {
        Hotels.push(snapshot.val());
      }
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
      {Loading ? (
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Stack className="my-5">
            <img width="70px" src={Loader} alt="" />
          </Stack>
        </Stack>
      ) : (
        <AllHotels Hotel={Hotel} />
      )}
    </>
  );
};

export default Review;
