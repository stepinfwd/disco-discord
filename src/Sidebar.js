import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import logo from "../src/features/logo.png"

import SettingsIcon from "@material-ui/icons/Settings";

import { Avatar } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
<img src={logo}></img>       <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Test Channel</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>{" "}
      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar__profileInfo">
          <h3>Stepinfwd</h3>
          <p>this is my id</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon></MicIcon>
          <HeadsetIcon></HeadsetIcon>
          <SettingsIcon></SettingsIcon>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
