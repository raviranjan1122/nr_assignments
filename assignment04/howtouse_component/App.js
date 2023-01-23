import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="heading" key="h1">
    Road To React-Heading
  </h1>
);
const Title = () =>(
    <h1 id="title" key="h1">
    Road To React-Titile
  </h1>
);
const SampleMessage = () =>(
    <h1 id="sampleMessage" key="h1">
    Road To React-Sample Message
  </h1>
);
//Here we are using Functional Component.
const HeaderComponent = () => {
  return (
    <div>
    {heading}
    <Title />
    {SampleMessage()}
      <h1>This is a Functional Component with H1-Tag</h1>
      <h2> This tag represent H2-Tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 

root.render(<HeaderComponent />)

