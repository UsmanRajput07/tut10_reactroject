import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";

const root = ReactDOM.createRoot(document.querySelector(".container-fluid"));
root.render(
  <>
    <header className="ps-0 pe-0">head</header>
    <main>
      <div className="container cont">new container</div>
    </main>
    <footer>footer</footer>
  </>
);
