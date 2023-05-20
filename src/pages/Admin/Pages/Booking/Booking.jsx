import React, { useEffect, useState } from "react";
import { Typography, Stack, Container, Button } from "@mui/material";
import StickyHeadTable from "../../../../components/Table/Table";
import { Table } from "react-bootstrap";
import { onChildAdded, onValue, ref, remove } from "firebase/database";
import { db } from "../../../../db/firebase";
import loading from "../../../../assets/loadingimg.gif";
import { delSingleData } from "../../../../db/firebaseMethod";
import { successNotify } from "../../../../components/Toast/Toastify";
import { ToastContainer } from "react-toastify";
const Booking = () => {
  const [Hotels, setHotels] = useState(null);
  const [Users, setUsers] = useState(null);
  const [Loader, setLoader] = useState(true);

  const getData = () => {
    setLoader(true);
    let hotelList = [];
    let Ref = ref(db, "Restaurant");
    let UsersRef = ref(db, "users");

    // hotelList
    onChildAdded(Ref, (snapshot) => {
      if (snapshot.exists()) {
        hotelList.push(snapshot.val());
      }
      setHotels(hotelList);
      setLoader(false);
    });
  };

  const del = (id) => {
    remove(ref(db, `HotelList/${id}`))
      .then(() => {
        getData();
        successNotify("Hotel deleted successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Stack marginY={1}>
            <Typography variant="h4" className="fw-bold">
            Restaurant  List
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" alignItems="flex-end" justifyContent="center">
          <Stack marginY={1}>
            <Button
              variant="contained"
              onClick={() => getData()}
              className="customBtn"
            >
              Refresh Data
            </Button>
          </Stack>
        </Stack>

        <Stack>
          {Loader ? (
            <Stack marginY={5} direction="row" justifyContent="center">
              <img src={loading} alt="" />
            </Stack>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Zip Code </th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {Hotels.map((hotel, index) => {
                  return (
                    <tr>
                      <td>{1 + index}</td>
                      <td className="text-nowrap">{hotel.restaurantName}</td>
                      <td className="w-50">{hotel.restaurantDescription}</td>
                      <td>
                        <img src={hotel.restaurantImg} width="120px" alt="" />
                      </td>
                      <td>{hotel.restaurantZipCode}</td>
                      <td>
                        <Button
                          onClick={() => del(hotel.id)}
                          variant="text"
                          color="error"
                        >
                          delete
                        </Button>
                      </td>

                      <td>
                        <select
                          className="bg-danger p-1 text-white"
                          name=""
                          id=""
                        >
                          <option value="">Active</option>
                          <option value="">Non Active</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Stack>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Booking;
