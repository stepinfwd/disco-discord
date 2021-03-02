import React from "react";
// import { app } from "./features/appSlice";
import { useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? (
        <>
          {" "}
          <Sidebar />
          <Chat />
        </>
      ) : (
        <p>you have to Login</p>
      )}
    </div>
  );
}

export default App;
