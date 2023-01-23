import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement(
    "h1",
    {
        id: "title",
        ClassName: "headOne",

    },
    "Heading 1"
);
const heading2 = React.createElement(
    "h2",
    {
        id: "title",
        ClassName: "headTwo",
    },
    "Heading 2"
);
const heading3 = React.createElement(
    "h3",
    {
        id: "title",
        ClassName: "headTwo",
    },
    "Heading 3"
);
const container = React.createElement(
    "div", // 1st  argument as Tag
    {
        id: "container", // 2nd argument as a Attributes and we can pass anything...which is later we knows as props.
    },
    [heading1, heading2, heading3] // 3rd argument as children
);
console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(container);