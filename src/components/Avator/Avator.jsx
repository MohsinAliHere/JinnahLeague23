import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../db/firebase";
import { successNotify } from "../Toast/Toastify";
import { ToastContainer } from "react-toastify";
import { checkUserLogin } from "../../redux/slices/HotelSlice";
import { Stack } from "@mui/material";

const settings = ["Login", "Create-Account"];
const isUserLoggedIn = ["Profile"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLogin } = useSelector((state) => state.hotel);
  const {profileData} = useSelector((state) => state?.hotel)



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(checkUserLogin(false));
        successNotify("You are logged out successfully");
      })
      
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {isUserLogin ? (
            <Stack>
             <MenuItem >
                <Typography textAlign="center" className="fw-bold text-dark">
                  Hi, {profileData.Name}
                </Typography>
              </MenuItem>
              {isUserLoggedIn.map((setting) => (
                <Link to={`/${setting}`}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" className="text-dark">
                      {setting}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              <MenuItem onClick={logout}>
                <Typography textAlign="center" className="text-dark">
                  Log out
                </Typography>
              </MenuItem>
            </Stack>
          ) : (
            settings.map((setting) => (
              <Link to={`/${setting}`}>
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" className="text-dark">
                    {setting}
                  </Typography>
                </MenuItem>
              </Link>
            ))
          )}
        </Menu>
      </Box>
      {/* {isUserLogin && (
        <Button variant="contained" className="customBtn">
          Book Online
        </Button>
      )} */}
      <ToastContainer />
    </>
  );
}
export default ResponsiveAppBar;
