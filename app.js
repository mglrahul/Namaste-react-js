// created a server
// Hot module replacement - HMR
// file watchers algo in c++
// bundling
// minify
// cleaning our code
// dev and prod build
// super fast build algorithm
// image optimization
// caching while development
// file compressions
// compatible with older version of browsers
// https on dev - npx parcel index.html --https
// manage port number of many projects
// consistent hashing algorithm to cache things up
// zero configuration
// transitive dependencies - all the sub dependency of different packages in package.json file
// 





import React from 'react';
import ReactDOM from "react-dom/client";

const heading =  React.createElement("h1", {
    id: "title"
}, "Heading 1 from parcel");

const heading2 =  React.createElement("h1", {
    id: "title"
}, "heading 2");

const container = React.createElement("div", {
    id: "container"
}, [heading, heading2])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);