import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import {
  Stack,
  Typography,
  Container,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { auth, db } from "../../../db/firebase";
import { ref, set, update } from "firebase/database";
import { setStatus } from "../../../redux/slices/HotelSlice";
import { successNotify } from "../../../components/Toast/Toastify";
import { ToastContainer } from "react-toastify";
const Profile = () => {
  const dispatch = useDispatch();

  const { Email, Name, ContactNumber } = useSelector(
    (state) => state.hotel.profileData
  );

  const [UpdateForm, setUpdateForm] = useState({
    Email: Email,
    Name: Name,
    ContactNumber: ContactNumber,
    Address: "",
  });

  const getData = (e) => {
    const { id, value } = e.target;
    setUpdateForm({
      ...UpdateForm,
      [id]: value,
    });
  };

  const submit = () => {
    const userId = auth.currentUser.uid;
    update(ref(db, `users/${userId}`), UpdateForm)
      .then(() => {
        successNotify("Successfully submitted");
        dispatch(setStatus("IDLE"));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Navbar />
      <Divider></Divider>
      <Container>
        <Stack className="mt-2">
          <Stack>
            <Typography variant="h4" className="customFont">
              Profile
            </Typography>
            <Typography variant="body1" className="customFont fw-bold">
              Manage your profile details
            </Typography>
          </Stack>
        </Stack>

        {/* ===================== */}

        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid xs={12} sm={12} md={12} lg={12}>
            <Accordion defaultExpanded={true} className="my-3">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                expanded={true}
              >
                <Typography variant="h6">General Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack padding={2} direction="column" spacing={1}>
                  <Stack>
                    <Typography variant="body1">Name</Typography>
                    <input
                      id="Name"
                      className="Custominp"
                      defaultValue={Name}
                      onChange={(e) => getData(e)}
                    />
                  </Stack>
                  <Stack >
                    <Typography variant="body1">Email</Typography>
                    <input
                      type="email"
                      id="Email"
                      className="Custominp"
                      defaultValue={Email}
                      onChange={(e) => getData(e)}
                    />
                  </Stack>
                  <Stack>
                  <Typography variant="body1">Contact Number</Typography>
                  <input
                    id="ContactNumber"
                    className="Custominp w-50"
                    defaultValue={ContactNumber}
                    onChange={(e) => getData(e)}
                  />
                </Stack>
                <Stack className="my-3"  direction="row" justifyContent="flex-start" >
                  <Button
                    onClick={submit}
                    variant="contained"
                    className="customBtn"
                  >
                    Update
                  </Button>
                </Stack>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Grid>
         
        </Grid>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Profile;
