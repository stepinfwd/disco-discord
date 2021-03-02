import React, { useState, useEffect } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import GifRoundedIcon from "@material-ui/icons/GifRounded";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectChannelName, selectChannelId } from "./features/appSlice";
import db from "./fire";
import firebase from "firebase";
function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput(" ");
  };
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircleOutlineRoundedIcon fontSize="large" />
        <form>
          <input placeholder="Whats Up?"></input>
          <button
            type="submit"
            className="chat__inputButton"
            onClick={sendMessage}
          >
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
