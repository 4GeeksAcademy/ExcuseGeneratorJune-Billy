/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let who = [
  "My dog",
  "My grandma",
  "The mailman",
  "My bird",
  "my cat",
  "my pet fish"
];
let action = [
  "ate",
  "peed on",
  "crushed",
  "broke",
  "threw up on",
  "threw away"
];
let what = [
  "my homework",
  "my phone",
  "my car",
  "my computer",
  "my sunglasses"
];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
  "while i was on the toilet"
];

function generateExcuse() {
  let rdmn1 = Math.floor(Math.random() * who.length);
  let rdmn2 = Math.floor(Math.random() * action.length);
  let rdmn3 = Math.floor(Math.random() * what.length);
  let rdmn4 = Math.floor(Math.random() * when.length);

  let excuse = `${who[rdmn1]} ${action[rdmn2]} ${what[rdmn3]} ${when[rdmn4]}`;
  document.getElementById("excuse").innerHTML = excuse;
}

window.onload = generateExcuse();

document.getElementById("gen").addEventListener("click", generateExcuse);
