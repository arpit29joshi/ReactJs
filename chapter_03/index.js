import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 id="title">Heading 1</h1>;
const Heading2 = ()=><h2 id="title">Heading 2</h2>;

function Container(){
  return (
    <div>
    {heading1}
    <Heading2/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<Container />);
