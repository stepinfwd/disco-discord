import React from "react";
import "./message.css";
import Avatar from "@material-ui/core/Avatar";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          stepinfwd
          <span className="message__timestamp">this is timestamp</span>
        </h4>
        <p>hi whats up bro!!!!</p>
      </div>
    </div>
  );
}

export default Message;
