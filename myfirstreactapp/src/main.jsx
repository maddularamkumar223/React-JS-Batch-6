import React from "react";
import ReactDom from "react-dom/client";

console.log(ReactDom);

// ! To Create a React Element we need to use the createElement Method which is present in the react.
// ! Syntax: createElement(tagname, attributes , content/message/element)

let reactH1 = React.createElement("h1", null, "I am a h1 tag created by react");
// let p = document.createElement("p")
// p.innerHTML  = "I am a para tag"

let reactP = React.createElement("p", { id: "para" }, "I am a para tag");
let article = React.createElement("article", null, reactH1, reactP);

ReactDom.createRoot(document.getElementById("root")).render(article);
