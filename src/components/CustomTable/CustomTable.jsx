import { ref, remove } from "firebase/database";
import React from "react";
import { Badge, Button, Table } from "react-bootstrap";
import { Stack, Typography } from "@mui/material";
import { delSingleData } from "../../db/firebaseMethod";
import { auth, db } from "../../db/firebase";
import { setStatus } from "../../redux/slices/HotelSlice";
import { useDispatch } from "react-redux";
import { successNotify } from "../Toast/Toastify";
import { ToastContainer } from "react-toastify";

const CustomTable = ({ Booking }) => {
  const dispatch = useDispatch();

//   {
//     "Booking": {
//         "Comments": "La Bella Italia is a hidden gem in the heart of the city. As soon as I stepped inside, I was transported to the streets of Italy. The rustic decor and warm atmosphere created the perfect setting for a cozy dinner. The menu featured a wide selection of authentic Italian dishes, and I opted for the classic spaghetti carbonara. The flavors were out of this world! The portion sizes were generous, and the service was excellent. If you're craving delicious Italian cuisine, look no further than La Bella Italia."
//     },
//     "ContactNumber": "0312-5566491",
//     "Email": "user@gmail.com",
//     "Name": "User",
//     "id": "-NVsipb-GJ9_8cXfyMi3",
//     "restaurantCategory": "Restaurant",
//     "restaurantContact": "02132-123123-1",
//     "restaurantDescription": "We're not just passionate purveyors of coffee, but everything else that goes with a full and rewarding coffeehouse experience. We also offer a selection of premium teas, fine pastries and other delectable treats to please the taste buds",
//     "restaurantImg": "https://s3-media0.fl.yelpcdn.com/bphoto/1LUCL1-EWTkgddO4Kup-LQ/l.jpg",
//     "restaurantName": "Starbucks Pickup",
//     "restaurantServices": "none",
//     "restaurantZipCode": "40579",
//     "star": 4
// }

  const del = (id) => {
    const userId = auth.currentUser.uid;
    remove(ref(db, `users/${userId}/${id}`)).then(() => {
      successNotify("Booking deleted successfully");
      dispatch(setStatus("IDLE"));
    });
  };

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th className="text-nowrap">Hotel Name</th>
            <th className="text-nowrap">Hotel Image</th>
            <th className="text-nowrap">Hotel Price</th>
            <th className="text-nowrap">No Of Days</th>
            <th className="text-nowrap">No Of Person</th>
            <th className="text-nowrap">No Of Rooms</th>
            <th className="text-nowrap">Booking Time & Date</th>
            <th className="text-nowrap">Status</th>
            <th className="text-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {Booking.map((booking, i) => {
            return (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>{booking.HotelName}</td>
                  <td>
                    <img src={booking.restaurantImg} width="120px" height="100px" alt="" />
                  </td>
                  <td>{booking.HotelPrice}</td>
                  <td>{booking.noOfDays}</td>
                  <td>{booking.noOfPerson}</td>
                  <td>{booking.noOfRooms}</td>
                  <td>{booking.Booking.Comments}</td>
                  <td>
                    <Badge bg="warning" text="dark">
                      Pending..
                    </Badge>
                  </td>
                  <td>
                    <Button
                      onClick={() => del(booking.id)}
                      variant="link"
                      className="text-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <ToastContainer />
    </>
  );
};

export default CustomTable;
