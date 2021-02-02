import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomendedVideos from "./RecomendedVideos";

function App() {
  return (
    <div className="app">
      {/* <h1>lets build youtube clone</h1> */}

      {/*Header -> <Header />*/}
      <Header />

      {/*Sidebar*/}
      <div className="app__page">
      <Sidebar />

      {/*Recomended video*/}
      <RecomendedVideos />
      </div>
      

    </div>
  );
}

export default App;
