import React from "react";
import ReactDOM from "react-dom";

import { HelloWorld } from "./helloWorld";
import { getRandomName } from "./generateRandomName";
import "./styles.scss";
import logoImg from "./img/logo_1.png";

const message = `My name is ${getRandomName()}`;

document.write(message);

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

ReactDOM.render(
  <div>
    <HelloWorld />
    <span> from React</span>
  </div>,
  document.getElementById("root")
);
