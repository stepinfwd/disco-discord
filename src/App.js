import React, { useState, useEffect } from "react";
// import { app } from "./features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./fire";
import {login,logout} from "./features/userSlice"

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("user is", authUser);
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayname: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        // use logged out
      }
    });
  }, []);
  return (
    <div className="App">
      {user ? (
        <>
          {" "}
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
