import React from "react";
import reactDom from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

// React V18
const root = reactDom.createRoot(document.getElementById(roor));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
