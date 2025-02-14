import React from "react";
import reactDom from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza</h2>;
}

// React V18
const root = reactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
