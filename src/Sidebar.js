import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";

import SidebarChannel from "./SidebarChannel";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import logo from "../src/features/logo.png";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import SettingsIcon from "@material-ui/icons/Settings";
import db, { auth } from "./fire";

import firebase from "firebase";
import 'firebase/firestore';

import { Avatar } from "@material-ui/core";
function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState("");
 
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);
  const handleAdd = () => {
    const channelName = prompt("add a new channel");
    if (channelName) {
      db.collection("channels").add({ channelName: channelName });
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__inner__container">
        <div className="sidebar__top">
          <img alt="" src={logo}></img> <ExpandMoreIcon />
        </div>
        <div className="sidebar__channels">
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <ExpandMoreIcon  />
              <h4>Test Channel</h4>
            </div>

            <AddIcon className="sidebar__addChannel" onClick={handleAdd} />
          </div>
          <div className="sidebar__channelList">
            {channels?channels.map(({id,channel}) => (
              <SidebarChannel id={id} key={id} channelName={channel.channelName}  />)):<p>test channel</p>}
            {/* <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel /> */}
          </div>
        </div>
        <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
        <div className="sidebar__profile">
          <Avatar onClick={() => auth.signOut()} src={user.photo} />
          <div className="sidebar__profileInfo">
            <h3>{user.displayName}</h3>
            <p>{user.uid.slice(3, 12)}</p>
          </div>
          <div className="sidebar__profileIcons">
            <MicIcon></MicIcon>
            <HeadsetIcon></HeadsetIcon>
            <SettingsIcon></SettingsIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
