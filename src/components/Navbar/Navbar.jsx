import React, { useState } from "react";
import { Container, Stack, Typography, Button, Divider } from "@mui/material";
import "./Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../../db/firebase";
import { Link, useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../Avator/Avator";
const Navbar = () => {
  const navigate = useNavigate();

  const [Active, setActive] = useState(false);

  let menu = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/WriteaReview",
      title: "Write a Review",
    },
    
  ];

  return (
    <>
      <Container className="my-3">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* logo name */}
          <Stack>
            <Link to="/" className="text-black">
              <Typography variant="h4" className="logoTxt">
              FlavorFusion.
              </Typography>
            </Link>
          </Stack>
          {/* links */}
          <Stack
            sx={{
              display: { xl: "block", xs: "none", sm: "none", md: "block" },
            }}
          >
            <Stack className="" direction="row" alignItems="center" spacing={3}>
              {menu.map((item, index) => {
                return (
                  <Link to={`${item.url}`} className="text-dark">
                    <Stack key={index}>
                      <Typography variant="h6" className="">
                        {item.title}
                      </Typography>
                    </Stack>
                  </Link>
                );
              })}
              
              <ResponsiveAppBar />
            </Stack>
          </Stack>
          <Stack
            sx={{
              display: { xl: "none", xs: "block", sm: "block", md: "none" },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} >
            <ResponsiveAppBar />
              {!Active ? (
                <AiOutlineMenu onClick={() => setActive(!Active)} size={30} />
              ) : (
                <AiOutlineClose onClick={() => setActive(!Active)} size={30} />
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Divider  />
      {Active && (
        <Stack className={`${Active && "sidebarNavbar"}`}>
          <Stack
            className="my-3"
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {menu.map((item, index) => {
              return (
                <Link to="/" className="text-dark">
                  <Stack key={index}>
                    <Typography variant="h6" className="fw-bold">
                      {item.title}
                    </Typography>
                  </Stack>
                </Link>
              );
            })}
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Navbar;
