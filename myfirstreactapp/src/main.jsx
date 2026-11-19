// import React from "react";
// import ReactDom from "react-dom/client";

// console.log(ReactDom);

// ! To Create a React Element we need to use the createElement Method which is present in the react.
// ! Syntax: createElement(tagname, attributes , content/message/element)

// // let p = document.createElement("p")
// // p.innerHTML  = "I am a para tag"

// let reactH1 = React.createElement("h1", null, "I am a h1 tag created by react");
// let reactP = React.createElement("p", { id: "para" }, "I am a para tag");
// let article = React.createElement("article", null, reactH1, reactP);

// ReactDom.createRoot(document.getElementById("root")).render(article);

import React from "react";
import ReactDom from "react-dom/client";

let userName = "Siri";

let greetingMessage = () => {
  return <>Hello {userName}. Have a great day😊</>;
};
let personDetails = {
  address: "Hyd",
  skill: "React JS",
};
let names = ["Ram", "Vivak", "Shrvya", "Rahul", "Vennala"];
ReactDom.createRoot(document.getElementById("root")).render(
  //   <React.Fragment>
  //     <article>
  //       <h1>I am a h1 tag</h1>
  //       <p>I am a para tag</p>
  //     </article>
  //     <section>
  //       <h1>Product Name: Mobile</h1>
  //       <p>
  //         Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  //         Repudiandae voluptatem vitae expedita laborum pariatur. Facilis eum
  //         quos, corrupti necessitatibus totam labore culpa ipsum ratione quisquam
  //         pariatur, minus, vel accusantium eos?
  //       </p>
  //       <p>Product Price: 500</p>
  //       <p>Product Rate: 5</p>
  //       <button>Add To Cart</button>
  //     </section>
  //   </React.Fragment>,
  <>
    {/* <article>
      <h1>I am a h1 tag</h1>
      <p>I am a para tag</p>
    </article>
    <section>
      <h1>Product Name: Mobile</h1>
      <p>
        Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repudiandae voluptatem vitae expedita laborum pariatur. Facilis eum
        quos, corrupti necessitatibus totam labore culpa ipsum ratione quisquam
        pariatur, minus, vel accusantium eos?
      </p>
      <p>Product Price: 500</p>
      <p>Product Rate: 5</p>
      <button>Add To Cart</button>
    </section> */}

    {/* <h1>Welcome Ravi</h1>
    <h1>Welcome Priya</h1>
    <h1>Welcome Rahul</h1>

    <h2>Hello {userName}</h2>
    <h2>{greetingMessage()}</h2>
    <p>Address: {personDetails.address}</p>
    <p>Skill:{personDetails["skill"]}</p> */}

    {names.map((value) => {
      return <p>Hello {value}</p>;
    })}

    <p className="Operation">{20 * 20}</p>
    <label htmlFor="">Number</label>
  </>,
);
