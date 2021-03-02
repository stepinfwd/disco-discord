import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import logo from "../src/features/logo.png";
import {selectUser} from "./features/userSlice"
import {useSelector} from "react-redux"
import SettingsIcon from "@material-ui/icons/Settings";
import {auth } from "./fire"
 
import { Avatar } from "@material-ui/core";
function Sidebar() {
   const user = useSelector(selectUser)
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img alt="" src={logo}></img> <ExpandMoreIcon />
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
        <Avatar onClick={()=>auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>{user.uid.slice(3,12)}</p>
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
