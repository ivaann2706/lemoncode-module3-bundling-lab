import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import logo from "./img/logo_1.png";
import { HelloWorld } from "./helloWorld";

const num: number = 5;

console.log(`number: ${num}`);

const img = document.createElement("img");
img.src = logo;
document.getElementById("imgContainer").appendChild(img);

ReactDOM.render(
  <div>
    <HelloWorld />
    <span> from React</span>
  </div>,
  document.getElementById("root")
);
