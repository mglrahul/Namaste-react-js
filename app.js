import React from "react";
import ReactDOM from "react-dom/client";

// const heading =  React.createElement("h1", {
//     id: "title"
// }, "Heading 1 from parcel");

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {Title()}
      <HeaderComponent2 />
      <HeaderComponent3 />
      <h1>Namaste React functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const HeaderComponent2 = () => (
    <h1> this is another h1 tag</h1>
)

const HeaderComponent3 = () => {
    return (
        <div><h1>this is another h1 tag</h1>
        <h2>this is another h1 tag</h2></div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
