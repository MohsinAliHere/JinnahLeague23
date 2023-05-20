import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import "./Dashboard.css";
import {
  AiOutlineAppstoreAdd,
  AiOutlineClose,
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineMessage,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

import { AddHotel, Booking, Feedback, Status } from "../Pages";
import { auth, db } from "../../../db/firebase";
import { signOut } from "firebase/auth";
import { errorNotify } from "../../../components/Toast/Toastify";
import { checkAdminLogin, setStatus } from "../../../redux/slices/HotelSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onValue, ref } from "firebase/database";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Open, setOpen] = useState(false);
  const [Loader, setLoader] = useState(true)
  const menuObj = [
    {
      title: "Status",
      url: "",
      element: <Status />,
      icon: <AiOutlineDashboard size={30} color="black" />,
    },
    {
      title: "Add Hotel",
      url: "addHotel",
      element: <AddHotel />,
      icon: <AiOutlineAppstoreAdd size={30} color="black" />,
    },
    {
      title: "Hotel List",
      url: "HotelList",
      element: <Booking />,
      icon: <AiOutlineUnorderedList size={30} color="black" />,
    },
    {
      title: "Feedback",
      url: "feedback",
      element: <Feedback />,
      icon: <AiOutlineMessage size={30} color="black" />,
    },
  ];

  useEffect(() => {
    let Ref = ref(db, `users/${auth.currentUser.uid}`);
    onValue(Ref, (snapshot) => {
      if (snapshot.val()?.role == "admin") {
        dispatch(checkAdminLogin(true));
        setLoader(false);
      } else {
        // navigate("/");
        setLoader(true);
      }
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        errorNotify(error);
      });
  };

  return (
   <>
   {
    Loader ? (
      <h1>Loader</h1>
    ) : (
      <Stack>
      <Stack className={`sidebar ${Open && "Active"}`}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={1}
          spacing={2}
        >
          {!Open && (
            <Stack>
              <AiOutlineMenu onClick={() => setOpen(!Open)} size={30} />
            </Stack>
          )}
          <Stack>
            <Typography noWrap className="fw-bold" variant="h5">
            FlavorFusion.
            </Typography>
          </Stack>
          <Stack>
            <AiOutlineClose size={30} onClick={() => setOpen(!Open)} />
          </Stack>
        </Stack>
        <Stack marginY={4}>
          {menuObj.map((item, index) => {
            return (
              <NavLink to={item.url} className="text-decoration-none text-dark">
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  padding={1}
                  spacing={2}
                  mt={2}
                >
                  <Stack>{item.icon}</Stack>
                  <Stack>
                    <Typography variant="h6" noWrap>
                      {item.title}
                    </Typography>
                  </Stack>
                </Stack>
              </NavLink>
            );
          })}
        </Stack>

        <Stack marginY={4}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            padding={1}
            spacing={2}
          >
            <Stack>
              <AiOutlineLogout size={30} color="black" />
            </Stack>
            <Stack onClick={logout}>
              <Typography variant="h6" noWrap>
                Logout
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack className={`pages ${Open && "Active"}`}>
        <Routes>
          {menuObj.map((item, index) => {
            return <Route path={item.url} element={item.element} />;
          })}
        </Routes>
      </Stack>
    </Stack>
    )
   }
   
   </>
  );
};

export default Dashboard;
