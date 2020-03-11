import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

export default function LogoutButton() {
  return (
    <div>
      <NavLink to="/login" exact>
        <MeetingRoomIcon variant="contained" color="inherit">
          Sign In
        </MeetingRoomIcon>
      </NavLink>

      <NavLink to="/register" exact>
        <MeetingRoomIcon variant="contained" color="inherit">
          Sign Up
        </MeetingRoomIcon>
      </NavLink>
    </div>
  );
}
