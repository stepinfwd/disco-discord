import React from "react";
import "./ChatHeader.css";
// import NotificationIcon from "@material-ui/icons/NotificationIcon";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
// import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsRoundedIcon />
        <LocationOnRoundedIcon />
        <PeopleRoundedIcon />
        <div className="chatHeader__search">
          <input type="text" placeholder="search" />
          <SearchRoundedIcon></SearchRoundedIcon>
        </div>
        <SendRoundedIcon></SendRoundedIcon>
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
