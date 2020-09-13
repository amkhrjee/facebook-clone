import React from "react";
import "./App.css";
import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import Feed from "./Feed/feed";
import Widgets from "./Components/Widgets/widgets";
import Login from "./Authentication/login";

const App = () => {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
