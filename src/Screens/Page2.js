import React, { Component } from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import temp from "../img/temp.png";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

export default class Page2 extends Component {
  render() {
    return (
      <>
        <div className="App" id="Home">
          <div className="sidebar">
            <Link to="register" style={linkStyle}>
              <div className="account">
                <img src={temp} alt="" id="accImg" />
                <h1 className="accountheader">Katie McLeen</h1>
              </div>
            </Link>
            <div className="break">.</div>
            <div className="sidecontent">
              <div className="panel">
                <h1 className="panelheader">Home</h1>
                <p className="panelitem">Overview</p>
                <p className="panelitem">Daily Questions</p>
              </div>
              <div className="panel">
                <Link to="page2" style={linkStyle}>
                  <h1 className="panelheader">Your Sleep</h1>
                  <p className="panelitem">Add Sleep Insights</p>
                  <p className="panelitem">Weekly Report</p>
                  <p className="panelitem">Your Notes</p>
                </Link>
              </div>
              <div className="panel">
                <h1 className="panelheader">Your Habits</h1>
                <p className="panelitem">View Habits</p>
                <p className="panelitem">Edit Habits</p>
                <p className="panelitem">Weekly Report</p>
              </div>
            </div>
            <div className="break">.</div>
            <div className="sidemenu">
              <div className="menuitem">
                <img src={seticon} alt="" className="sidemenuicon" />
                <p className="sidemenup">Settings</p>
              </div>
              <div className="menuitem">
                <img src={searchicon} alt="" className="sidemenuicon" />
                <p className="sidemenup">Find</p>
              </div>
            </div>
          </div>
          <div className="maincontainer">
            <h1 className="containerheader">Your Sleep</h1>
            <div className="mainpanelpg2">
              <h1 className="pg2mainheader">About Tonight</h1>
              <div className="mainpanelgrid">
                <div className="mainpanelleft">
                  <p className="mainpanelleft2text">
                    Take a couple minutes to reflect on your sleep: write down
                    what you think is more important
                  </p>
                </div>
                <hr className="mainpanelsep"></hr>
                <div className="mainpanelcenter">
                  <div className="pg2maintop">
                    <h1 className="pg2maintopheader">
                      Do you remember a dream?
                    </h1>
                    <div className="pg2maintopswitch">
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch />}
                          label="Yes"
                          labelPlacement="end"
                        />
                      </FormGroup>
                    </div>
                    <p className="mainpanelcenter2text">
                      Take notes about your dreams, if you remember one, or
                      other general notes
                    </p>
                  </div>
                  <div className="pg2mainbottom">
                    <h1 className="pg2mainbottomheader">
                      How long have you slept?
                    </h1>
                    <div className="textfield">
                      <TextField
                        id="filled-basic"
                        label="Hours"
                        variant="standard"
                        type="number"
                        margin="none"
                        size="small"
                        color="primary"
                      />
                    </div>
                  </div>
                </div>
                <hr className="mainpanelsep"></hr>
                <div className="mainpanelright">
                  <div className="mainpanaelrightheader">
                    How did you sleep?
                  </div>
                </div>
              </div>
            </div>
            <div className="mainpanelscont">
              <div className="bottompanel"></div>
              <div className="bottompanel"></div>
            </div>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  textAlign: "left",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#DFEFF0",
    },
  },
});
