import React from "react";
import "./App.css";
import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import Feed from "./Feed/feed";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
};

export default App;
