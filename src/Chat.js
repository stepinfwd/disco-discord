import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import GifRoundedIcon from "@material-ui/icons/GifRounded";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleOutlineRoundedIcon fontSize="large" />
        <form>
          <input placeholder="Whats Up?"></input>
          <button type="submit" className="chat__inputButton">
            Send message
          </button>
        </form>
        <div className="chat__InputIcons">
          <CardGiftcardRoundedIcon />
          <GifRoundedIcon />
          <EmojiEmotionsRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
