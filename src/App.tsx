import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MapGenerator } from "./MapGen";

function App() {
  return (
    <div className="App">
      <MapGenerator {...mapInfo} />
      <MapGenerator {...mapInfo2} />
    </div>
  );
}

const mapInfo = {
  imgUrl: logo,
  buttons: [
    { name: "1", x: 15, y: 50, width: "200px", height: "100px" },
    { name: "2", x: 79, y: 10, width: "100px", height: "20px" },
    { name: "3", x: 20, y: 0, width: "80px", height: "100px" },
    { name: "4", x: 60, y: 13, width: "100%", height: "40px" }
  ]
};

const mapInfo2 = {
  imgUrl: logo,
  buttons: [
    { name: "10", x: 15, y: 50, width: "200px", height: "100px" },
    { name: "2", x: 79, y: 10, width: "100px", height: "20px" },
    { name: "3", x: 20, y: 0, width: "80px", height: "100px" },
    {
      name: "4",
      x: 60,
      y: 13,
      width: "100%",
      onClick: () => console.log("hii"),
      height: "40px"
    }
  ]
};

export default App;
