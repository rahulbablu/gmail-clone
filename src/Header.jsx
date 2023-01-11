import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import logo from "./assets/gmail.png";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const signOutApp = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" />
      </div>
      <div className="header__middle">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input placeholder="Search mail" type="text" />

        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>

        <IconButton>
          <SettingsIcon />
        </IconButton>

        <IconButton>
          <AppsIcon />
        </IconButton>

        <Avatar
          className="header__rightAvatar"
          src={user?.photoUrl}
          alt="profile pic"
          sx={{ width: 34, height: 34 }}
          onClick={signOutApp}
        />
      </div>
    </div>
  );
};

export default Header;
