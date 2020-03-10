import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import "./navbar-link.css";

export default class Navbarlink extends Component {
  render() {
    const preventDefault = event => event.preventDefault();
    return (
      <div className="navLinkPosition">
        <Typography>
          <Link className="" to="#">sing in</Link>
          <Link href="#">sing up</Link>
          <Link href="#">account</Link>
          <Link href="/announcement">announcement</Link>
        </Typography>
      </div>
    );
  }
}
