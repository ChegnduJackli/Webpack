import _ from "lodash";
import printMe from "./print.js";
import "./style.css";
import { cube } from "./math.js";


 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }


function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

function component2() {
  var element = document.createElement("pre");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());
