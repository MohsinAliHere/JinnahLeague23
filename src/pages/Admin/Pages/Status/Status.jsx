import React from "react";
import { Grid, Stack, Typography, Container } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlineFeedback } from "react-icons/md";
import { onChildAdded, onValue, ref, remove } from "firebase/database";
import { db } from "../../../../db/firebase";
import { useState } from "react";
import { useEffect } from "react";
import CustomTable from "../../../../components/CustomTable/CustomTable";
import Booking from "../Booking/Booking";
import { Table } from "react-bootstrap";
import { setStatus } from "../../../../redux/slices/HotelSlice";
import { useDispatch } from "react-redux";

const Status = () => {
  const dispatch = useDispatch()


  const [Hotels, setHotels] = useState([]);
  const [Users, setUsers] = useState([])
  const [Loader, setLoader] = useState(true);

  const getData = () => {
    dispatch(setStatus("IDLE"));
    setLoader(true);
    let hotelList = [];
    let users = [];
    let Ref = ref(db, "HotelList");
    let UsersRef = ref(db, "users");

    // hotelList 
    onChildAdded(Ref, (snapshot) => {
      if (snapshot.exists()) {
        hotelList.push(snapshot.val());
      }
      setHotels(hotelList);
    });
    setLoader(false);

    // users



  }

  const status = [
    {
      icon: <CgProfile size={30} color="black" />,
      title: "Active Users",
      lenght: "10"
    },
    {
      icon: <RiHotelLine size={30} color="black" />,
      title: "Hotels Users",
      lenght: Hotels.length
    },
    {
      icon: <MdOutlineFeedback size={30} color="black" />,
      title: "Feedback Users",
      lenght: "10"

    },
  ];




  return (
    <>
    
    </>
  );
};

export default Status;







  //       Loader ? (<h1>LOading</h1>) :   (
  //         <Container>
  //         <Stack className="m-2" >
  //           <Typography variant="h4" className="customFont" >Dashboad </Typography>
  //         </Stack>
  //         <Grid
  //           container
  //           marginY={2}
  //           spacing={1}
  //           direction="row"
  //           justifyContent="space-around"
  //           alignItems="center"
  //           alignContent="center"
  //           wrap="wrap"
  //         >
  
  
  //           {status.map((x, i) => {
  //             return (
  //               <>
  //                 <Grid className="m-3 bg-info rounded p-3" xs={12} sm={6} md={2} lg={2}>
  //                   <Stack
  //                     direction="column"
  //                     alignItems="space-around"
  //                     justifyContent="space-around"
  //                   >
  //                     <Stack>
  //                       <Stack direction="row" >
  //                         <Stack>{x.icon}</Stack>
  //                         <Stack>
  //                           <Typography variant="h3" >{x.lenght}</Typography>
  //                         </Stack>
  //                       </Stack>
  //                       <Stack>
  //                         <Typography variant="h6" noWrap >{x.title}</Typography>
  //                       </Stack>
  //                     </Stack>
  //                   </Stack>
  //                 </Grid>
  //               </>
  //             );
  //           })}
  //         </Grid>
  //         <Stack className="m-2"  >
  //           <Stack>
  //             <Typography variant="h4" className="customFont" >Hotel List</Typography>
  //           </Stack>
  //         </Stack>
  //         <Table>
  
  //           <Table striped bordered hover>
  //             <thead>
  //               <tr>
  //                 <th>#</th>
  //                 <th>Hotel Name</th>
  //                 <th>Hotel Description</th>
  //                 <th>Hotel Image</th>
  //                 <th>Hotel Price</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {
  //                 Hotels.map((Hotel, index) => {
  //                   return (
  //                     <tr>
  //                       <td>{index + 1}</td>
  //                       <td>{Hotel.HotelName}</td>
  //                       <td className="w-25"  >{Hotel.HotelDescription}</td>
  //                       <td>
  //                         <img src={Hotel.HotelImg} width="100px" height="100px" alt="" />
  //                       </td>
  //                       <td>{Hotel.HotelPrice}</td>
  //                     </tr>
  //                   )
  //                 })
  //               }
  
  //             </tbody>
  //           </Table>
  //         </Table>
  
  //       </Container>
  //       )
       
  // s