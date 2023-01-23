import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement(
    "h1",
    {
        id: "title",  
        key: "h1"
    },
    "Heading 1 for parcel"
);

// React.ceateElement => Object => HTML(DOM)

console.log(heading1);
const heading2 = React.createElement(
    "h2",
    {
        id: "title",
        key: "h2", //here give key passing as props.
    },
    "Heading 2"
);
const heading3 = React.createElement(
    "h3",
    {
        id: "title",
        key: "h3",
    },
    "Heading 3"
);
const container = React.createElement(
    "div", 
    {
        id: "container", 
    },
    [heading1, heading2, heading3]
);
console.log(heading1);
const sampleHearList = React.createElement("div",{
    id: "listContainer",
    key: "listHead",
},[
        // create head-tag
        React.createElement("ul",
            {
                    id: "headerUl",
                    key: "My-Header Section"
            },
        //create ul-tag
        // create list-tag
              [  React.createElement("li",{
                    id: "tagLi",
                    key: "about"
                },"About"),
                React.createElement("li",{
                    id: "tagLi",
                    key: "home"
                },"Home"),
                React.createElement("li",{
                    id: "tagLi",
                    key: "help"
                },"Help")]    
            ), 
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(sampleHearList); 