import React from "react";
// import { app } from "./features/appSlice";
import { useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

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
        <Login/>
      )}
    </div>
  );
}

export default App;
